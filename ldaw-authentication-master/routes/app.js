let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');
let appController = require('../controllers/UserController');
let authMiddleware = require('../middlewares/AuthMiddleware');

router.get('/dashboard', authMiddleware.isAuth, authMiddleware.userAuth, dashboardController.index);
router.get('/users', authMiddleware.isAuth, authMiddleware.adminAuth, appController.index);

module.exports = router;
