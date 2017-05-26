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
    //clear session
    sess.usrname = null;
    sess.password = null;
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
        res.status(400).send("username or password invalid!");
      }else{
        sess.username = user.dataValues.username;
        res.status(200).send("OK");
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
