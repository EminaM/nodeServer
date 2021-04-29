import { root, text, html } from './controller';
import { log, checkSize } from './middlewares';

const router = app => {
    app.get('/', log, root);
    
    app.get('/text', text);
    app.get('/text/:param', log, checkSize, text);
    
    app.get('/html', html);
    app.get('/html/:param', log, checkSize, text);
}

export default router;