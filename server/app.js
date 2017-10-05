const express = require('express');
const app = express();
const Config = require('./config/index');

// 中间件
const middlewareAutoStaticView = require('./middleware/auto-static-view')();
const middleware500 = require('./middleware/500');
const middleware404 = require('./middleware/404');


app.set('port', process.env.PORT || Config.port);
app.set('views', Config.view)
app.set('view engine', Config.engine);


app.get('/', (req, res) => {
    res.type('text/html');
    res.render('/index', {
        title: '首页',
        body: '我是首页'
    });
})

// 自动同名静态视图
app.use(middlewareAutoStaticView);

// 404
app.use(middleware404);

// 500
app.use(middleware500);


app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctr + C to terminate.');
})