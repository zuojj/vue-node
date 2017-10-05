const LoginViewModel = require('../viewModels/login');

module.exports = {
    registerRoutes(app) {
        app.get('/login', this.login);
        app.get('/register', this.register);
        app.get('/retrieve', this.retrieve);
    },
    /**
     * 
     * 登录
     * 
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     * @returns 
     */
    login(req, res, next) {
        if(isLogin) {
            return next();
        }
        res.render('/login', LoginViewModel(req.body.userid));
    },
    /**
     * 注册
     * 
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     * @returns 
     */
    register(req, res, next) {
        if(isRegister) {
            return next();
        }
        res.render('/register');
    },

    /**
     * 找回
     * 
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     */
    retrieve(req, res, next) {
        res.render('/retrieve');
    }
}