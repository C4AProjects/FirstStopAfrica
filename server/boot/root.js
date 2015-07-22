module.exports = function(server) {
    
    // Install a `/` route that returns server status
    var router = server.loopback.Router();
    router.get('/ping', server.loopback.status());
    
    var Email = server.models.Email
    
    var fromEmailAddress = server.datasources.emailDs.settings.transports[0].auth.user;
    
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
                res.json({accepted:false,error:"internal error:save"});
                
            }
            if (model){
                console.log('>/subscribe: created');
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
                        res.json({accepted:false, error:"mail error:connection"});
                        return;
                    }
                    if(info && info.accepted.length > 0){
                        model.isMailSent = true;
                        model.save(null);
                        res.json({accepted: true});
                    }else{
                        res.json({accepted:false});
                    }
                });
                
            }
            
        };
        Subscription.findOrCreate({where:data}, data, cb);
    });
    server.use(router);
};
