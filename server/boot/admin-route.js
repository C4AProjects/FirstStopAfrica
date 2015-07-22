module.exports = function(server) {
    var User = server.models.User;
    var router = server.loopback.Router();
    //admin login page
    router.get('/', function(req, res){
        res.render('admin/index', {error: ''});
    });
    
    router.post('/', function(req, res){
        User.login({email: req.body.email, password: req.body.password}, function(err, token){
            if (err) {
                res.render('admin/index', {
                    error: err
                });
                return;
            }
            res.cookie('accessToken', token, { path: '/admin', signed: true });
            res.render('admin/home');
        });
    });


    server.use('/admin', router);
};