const express = require('express');
const registerRoutes = require('./routes/register');
const locationRoutes = require('./routes/location');
const { requireAuth } = require('./middlewares/auth')
const app = express();

app.use(express.json());
app.use('/', registerRoutes);
app.use('/locations', requireAuth, locationRoutes)

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
