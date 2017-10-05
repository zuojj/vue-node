
/**
 * 登录
 */
exports.login = function(req, res) {
    res.render('Login');
}

/**
 * 注册
 */
exports.register = function(req, res) {
    res.render('Register');
}

/**
 * 找回密码
 */
exports.retrieve = function(req, res) {
    res.render('Retrieve');
}