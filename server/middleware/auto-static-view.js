const path = require('path');
const fs = require('fs');
const Config = require('../config/index');

let AutoStaticViews = {};
module.exports = function(options) {
    return function(req, res, next) {
        let p = req.path.toLowerCase();
        if(AutoStaticViews[p]) {
            return res.render(AutoStaticViews[p]);
        }

        if(fs.existsSync(path.join(__dirname, Config.view, p + '.' + Config.engine))) {
            AutoStaticViews[p] = p.replace(/^\//, '');
            return res.render(AutoStaticViews[p]);
        }
    }
}