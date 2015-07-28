module.exports = function(server) {
    var Subscription = server.models.Subscription;
    var User = server.models.User;
    var router = server.loopback.Router();
    //admin login page
    
    router.get('/login/', function(req, res){
        res.render('admin/login', {error: ''});
    });
    
    
    router.post('/login/', function(req, res){
        User.login({email: req.body.email, password: req.body.password}, function(err, token){
            if (err) {
                res.render('admin/login', {
                    error: err
                });
                return;
            }
            
            res.cookie('access_token', token.id, { signed: true });
            
            res.cookie('userId', token.userId, { signed: true })
            res.redirect('home');
           
        });
    });
    router.post('/logout', function(req, res){
        
    });
    
    //admin home page
    router.get('/home/', function(req, res){
        
        if (!req.accessToken) return res.redirect('back');
               
        var s_count;
        Subscription.count(function(err, count){
            if (err) throw err;
            res.render('admin/home', {subscriptions_count: count});
        });
        
        
    });
    
    //subscriptions table page
    router.get('/subscriptions', function (req, res){
        res.render('admin/subscriptions-table');
    });

    server.use('/admin', router);
};