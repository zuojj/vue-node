
const LoginModel = require('../models/login');

module.exports = function(userid) {
    let userlists = LoginModel.findById(userid);

    // format 
    userlists.map((item) => {
        return item;
    })

    return;
}