function login(req, res, next) {
  // record session
  req.session.username = req.body.username;
  req.session.password = req.body.password;
  // back to home page
  res.render('index');
}
exports.login = login;
