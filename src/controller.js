const root = (req, res) => {
    res.end('Hello Node server, how are you?');
};

const text = (req, res) => {
    const param = req.params.param || 'Node';
    res.end('<h1> Hello ' + param + ' server!</h1>');;
};

const html = (req, res) => {
    const param = req.params.param || 'Node';
    res.end('<h1> Hello ' + param + ' server!</h1>');;
};

export { root, text, html };