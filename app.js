const express = require('express');
const pokeneasRouter = require('./routes/pokeneas');

const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use('/', pokeneasRouter);

app.listen(port, () => {
    console.log(`Pokeneas listening on port ${port}`);
});
