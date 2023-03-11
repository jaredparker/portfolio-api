
const db = require('portfolio-db');

if( process.env.NODE_ENV != 'production' ){ require('dotenv').config(); }

// DataBase init
const uri = process.env.MONGO_DB_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

db.connect( uri, options );

// App init
const app = require( __dirname + '/app.js' );

// listen for requests
const listener = app.listen( process.env.PORT || 4000, () => {
    console.log(`API is listening on port ${listener.address().port}`);
});