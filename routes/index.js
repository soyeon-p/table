const express = require('express');
const Calendar = require('../models/Calendar');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const calendars = await Calendar.findAll();
    res.render('sequelize', { calendars });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;