const express = require('express');
const cors = require('cors');

const router = require('./routes');

const app = express();

app.use(cors());
app.options('*', cors());
app.options('/api/v1', cors());

app.use(express.json());
app.use('/api/v1', router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
