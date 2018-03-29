require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

const port = process.env.PORT || 3000


massive(process.env.CONNECTION_STRING).then(dbInstance => {
    console.log("dbInstance: " , dbInstance);
})






app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

