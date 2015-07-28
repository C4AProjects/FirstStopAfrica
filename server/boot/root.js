module.exports = function(server) {
    
    // Install a `/` route that returns server status
    var router = server.loopback.Router();
    router.get('/ping', server.loopback.status());
    
    var Email = server.models.Email
    
    var fromEmailAddress = server.datasources.emailDs.settings.transports[0].auth.user;
    var sendEmail = function(model, res){
        //send email
        options = {
            from: fromEmailAddress,
            to: model.email,
            subject: 'FirStop Updates Subscription',
            text: ['Hello Dear,', '', 
            'You have been successfully subscribed to get updates from FirStop.',
            'Seen you soon.', '', 'FirStop Team'].join('\n')
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
            refererUrl: req.headers.referer
        };
        cb = function(err, model){
            if(err) {
                console.log(err);
                res.json({accepted:false, error:"internal error:save"});
                
            }
            if (model === null){
                Subscription.create(data, function(err, models){
                    console.log('>/subscribe: created');
                    if (err) throw err;
                    if (models) {sendEmail(models, res);}
                    else {
                        console.log('Null value.Cannot create model into DB.');
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
