module.exports = function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Server Error');
}    