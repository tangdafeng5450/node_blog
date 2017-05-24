var login = function (req,res,next){
    var sess = req.session;
    sess.username = req.body.username;
    res.render('index');
};

exports.login = login;