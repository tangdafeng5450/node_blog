var express = require('express');
var router = express.Router();
var filter = require('../modules/filter');
var user = require('../modules/user');

/* 登录记入 */
router.post('/login', user.login);

/* 所有请求都过滤一遍 */
router.all('*', filter.loginAuthorize);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("index");
});

module.exports = router;
