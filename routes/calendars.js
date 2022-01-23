const express = require('express');
const Calendar= require('../models/calendar');


const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const calendars = await Calendar.findAll();
      res.json(calendars);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const calendar = await Calendar.create({
        shedule: req.body.name,
        start: req.body.age,
        finish: req.body.married,
      });
      console.log(calendar);
      res.status(201).json(calendar);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });




module.exports = router;