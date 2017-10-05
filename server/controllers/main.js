const MainViewModel = require('../viewModels/main');

module.exports = {
    registerRoutes(app) {
        app.get('/', this.home);
        app.get('/about', this.about);
    },
    /**
     * 
     * 首页
     * 
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     * @returns 
     */
    home(req, res, next) {
        if(isLogin) {
            return next();
        }
        res.render('/login');
    },
    /**
     * 关于我们
     * 
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     * @returns 
     */
    about(req, res, next) {
        if(isRegister) {
            return next();
        }
        res.render('/register');
    }
}