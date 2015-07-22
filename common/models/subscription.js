module.exports = function(Subscription) {
    //hook to set created and lastUpdated properties
    Subscription.observe('before save', function updateTimestamp(ctx, next) {
        
        if (ctx.instance) {
            if (ctx.isNewInstance) { ctx.instance.created = new Date(); }
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        next();
    });

};
