const express = require( 'express');
const bodyParser = require( 'body-parser');
const morgan = require( 'morgan');
const cors = require( 'cors');


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.use('/*', (req, res) => res.send({ message: 'welcome' }));

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`connected on port ${PORT}`);
});

module.exports = app;