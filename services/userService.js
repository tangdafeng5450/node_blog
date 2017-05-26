// import user model
var UserModel = require('../models/user').User,
    Crypto = require('crypto');
/**
 * 
 * @param {*} req request
 * @param {*} res response
 * @param {*} next next function
 * 
 * 1 validate username and password
 * 2 record username into session
 */
exports.login = function (req,res,next){
    var sess = req.session;
    var req_password = req.body.password;
    var req_username = req.body.username;
    // MD5 Hash
    req_password = Crypto.createHash('md5').update(req_password).digest('hex');
    UserModel.findOne({
        where:{
            username:req.body.username
        }
    }).then(user => {
      if (!user) {
        console.log("username or password invalid!");
      }else{
        sess.username = user.username;
        res.status(200).render('index');
      }
    });
};

exports.addUser = function(req,res,next){
    var req_password = req.body.password;
    var req_username = req.body.username;
    // MD5 Hash
    req_password = Crypto.createHash('md5').update(req_password).digest('hex');
    UserModel.create({
        username:req_username,
        password:req_password
    });
};
