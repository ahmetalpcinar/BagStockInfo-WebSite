const path = require('path');
const express = require('express');
const routes = require('./routes.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/html', express.static(path.join(__dirname, 'web/html')));
app.use('/css', express.static(path.join(__dirname, 'web/css')));
app.use('/js', express.static(path.join(__dirname, 'web/js')));
app.use('/images', express.static(path.join(__dirname, 'web/images')));

app.use(routes);

app.listen(port, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${port}/html/index.html`);
});