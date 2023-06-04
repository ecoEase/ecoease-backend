const express = require('express');
//routes
const registerRoutes = require('./routes/register');
const locationRoutes = require('./routes/location');
const detailTransactionRoutes = require('./routes/detailTransaction');
const orderRoutes = require('./routes/order');
const garbageRoutes = require('./routes/garbage');
const mitraRoutes = require('./routes/mitra');
const addressRoutes = require('./routes/address');
//middleware
const { requireAuth } = require('./middlewares/auth')

const app = express();

app.use(express.json());
app.use('/', registerRoutes);
app.use('/mitra', mitraRoutes);
app.use('/locations', requireAuth, locationRoutes)
app.use('/detail-transactions', requireAuth, detailTransactionRoutes)
app.use('/orders', requireAuth, orderRoutes)
app.use('/address', requireAuth, addressRoutes);
app.use('/garbage', requireAuth, garbageRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
