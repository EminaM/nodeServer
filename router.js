const { root, text, html } = require('./controller');
const { log, checkSize } = require('./middlewares');

const router = app => {
    app.get('/', log, root);
    
    app.get('/text', text);
    app.get('/text/:param', log, checkSize, text);
    
    app.get('/html', html);
    app.get('/html/:param', log, checkSize, text);
}

module.exports = router;