module.exports = function(server){
    var default_users = [
        {email: "daffea@gmail.com", password: "firstop"},
        {email: "yazid.wabi@gmail.com", password: "firstop"}        
    ]
    var User = server.models.User;
    default_users.forEach(function(user){
        console.log('Inserting into db:' + JSON.stringify(user));
        User.upsert(user, null);
    });
};