const express = require('express');
//routes
const registerRoutes = require('./register');
const locationRoutes = require('./location');
const detailTransactionRoutes = require('./detailTransaction');
const orderRoutes = require('./order');
const garbageRoutes = require('./garbage');
const mitraRoutes = require('./mitra');
const addressRoutes = require('./address');
const loginRoutes = require('./login');
//middleware
const { requireAuth } = require('../middlewares/auth')

const router = express.Router();

router.use('/register', registerRoutes);
router.use('/login', loginRoutes);
router.use('/address', requireAuth, addressRoutes);
router.use('/detail-transactions', requireAuth, detailTransactionRoutes)
router.use('/garbage', requireAuth, garbageRoutes);
router.use('/locations', requireAuth, locationRoutes)
router.use('/mitra', mitraRoutes);
router.use('/orders', requireAuth, orderRoutes)

module.exports = router