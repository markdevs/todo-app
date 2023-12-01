const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');
const loginController = require('../controllers/loginController');
const xss = require('xss-clean');
const helmet = require('helmet');

const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // Limite de 5 requisições por IP
  });


router.post('/sign-up', xss(), cadastroController);

router.use('/login', limiter);
router.use('/login', xss());
router.use('/login', helmet());
router.post('/login', loginController);

module.exports = router