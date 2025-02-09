const express = require('express');
const router = express.Router();
const { addDonor, getDonors } = require('../controllers/donorController');

// Route pour ajouter un donateur
router.post('/add', addDonor);

// Route pour récupérer les derniers donateurs
router.get('/list', getDonors);

module.exports = router;
