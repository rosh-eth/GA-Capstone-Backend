require('./mongo');
const express = require('express');
const PriceRouter = require('./src/routes/Price.routes');
const AuthRouter = require('./src/routes/Auth.routes');
const PublicRouter = require('./src/routes/Public.routes')
const session = require('express-session');
const AssetRouter = require('./src/routes/Asset.routes')

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(express.static('frontend'));
app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: "this is a random secret",
    resave: false,
    saveUninitialized: false
}))

app.use('/price', PriceRouter);
app.use('/auth', AuthRouter);
app.use('/public', PublicRouter);
app.use('/asset', AssetRouter);


app.listen(port, () => console.log(`Listening on port ${port}`));
