module.exports = function(server) {
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
    
    //admin home page
    router.get('/home/', function(req, res){
        console.log(req.accessToken);
        console.log(req.signedCookies);
        if (!req.accessToken) return res.redirect('back');
        res.render('admin/home');
    });
    
    //subscriptions table page
    router.get('/subscriptions', function (req, res){
        res.render('admin/subscriptions-table');
    });

    server.use('/admin', router);
};