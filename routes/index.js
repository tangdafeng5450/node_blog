var express = require('express');
var router = express.Router();
var filterService = require('../services/filterService');
var userService = require('../services/userService');

/* 登录记入 */
router.post('/login', userService.login);

/* 所有请求都过滤一遍 */
router.all('*',filterService.loginAuthorize);

/* GET blog list page. */
router.get('/', function (req, res, next) {
  res.render("blog/blog_list");
});

module.exports = router;
