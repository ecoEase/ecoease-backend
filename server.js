const express = require('express');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use('/api/v1', router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
