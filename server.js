const express = require('express')
const bodyParser = require('body-parser');
const route = require('./src/router/route');
const cors = require('cors')

const app = express();
const port = 3002
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(route);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });