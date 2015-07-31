module.exports = function(server) {
    
    // Install a `/` route that returns server status
    var router = server.loopback.Router();
    router.get('/ping', server.loopback.status());
    
    var Email = server.models.Email
    
    var fromEmailAddress = server.datasources.emailDs.settings.transports[0].auth.user;
    var sendEmail = function(model, res){
        //send email
        options = {
            from: 'FirstStopAfrica ✔ <'+fromEmailAddress+'>',
            to: model.email,
            subject: 'FirStop Updates Subscription',
            text: ['Hello '+model.name+',', '', '','',
            "Welcome and Thank you for signing up for FirstStop Africa's E-News!",'',
            'We are currently in flight and preparing to arrive with our premiere Pan-African digital publication inspiring travel and cultural tourism to Africa and countries of the Diaspora.','','','',
            'You will be one of the first to know of our upcoming digital launch! We are all so excited here and are even more thrilled that you are now part of FirstStop Africa’s amazing community as we, together, partake on this amazing journey “home”.','','','',
            'Staying informed is the your first step to your FirstStop in Africa by receiving  the latest in Pan-African cultural news,  trends, ideas, tips  and inspiration for travel and more. So tell a friend to tell a friend and support our Online Community — Facebook, Twitter, Instagram, Pinterest and LinkedIN!','','','',
            'Once again, thank you for your support and we will be in touch with you soon as we prepare to land!','','','',
            'Sincerely,','','','',
            'Team FirstStop Africa'
            ].join('\n')
        };
        //see nodemailer callback function(https://github.com/andris9/Nodemailer)
        Email.send(options, function(err, info){
            if(err) {                        
                console.log(err);
                response = {accepted:false, error:"mail error:connection"};
                console.log(response);
                res.json(response);
            }
            if(info && info.accepted.length > 0){
                model.isMailSent = true;
                model.save(null);
                console.log('mail sent and model updated');
                res.json({accepted: true});
            }else{
                console.log('mail not sent');
                res.json({accepted:false});
            }
        });

    };
    server.post('/subscribe', function(req, res){
        Subscription = server.models.Subscription;
        console.log(req.body);
        data = {
            email: req.body.email,            
            name: req.body.name
        };
        cb = function(err, model){
            if(err) {
                console.log(err);
                res.json({accepted:false, error:"internal error:find"});
                
            }
            if (model === null){
                Subscription.create(data, function(err, models){
                    console.log('>/subscribe: created');
                    if (err) throw err;
                    if (models) {sendEmail(models, res);}
                    else {
                        console.log('Null value.Cannot create model into DB.');
                        res.json({accepted:false, error:"internal error:create"});
                    }
                });
            }
            else {
                console.log('>/subscribe: already exists.');
                if(!model.isMailSent) {
                   sendEmail(model, res);
                   
                } 
                res.json({exists: true});
            }
            
        };
        Subscription.findOne({where:data}, data, cb);
    });
    server.use(router);
};
