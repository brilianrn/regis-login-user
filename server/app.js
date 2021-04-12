const express = require('express');
const cors = require('cors');
const route = require('./routes/index');
const errHandler = require('./middleware/errHandler');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(route);
app.use(errHandler);

app.listen(port, () => {
  console.log('Running on port:', port);
});