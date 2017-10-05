const MainModel = require('../models/main');

module.exports = function(userid) {
    let data = MainModel.findById(userid);

    return data;
}