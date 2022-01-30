const express = require('express');
const Calendar= require('../models/Calendar');


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
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
      });
      console.log(calendar);
      res.status(201).json(calendar);
    } catch (err) {
      console.error(err);
      next(err);
    }
    
  }
  )
   .put(async(req,res, next)=> {
     try{
    const calendar = await Calendar.update({
      title: req.body.title,},
      {start: req.body.start,},
      {end: req.body.end,}
    );
    res.json(calendar);
  }catch(err){
    console.error(err);
    next(err);
  }})
   .delete(async(req, res, next)=>{
    try{
      const calendar = await Calendar.remove(
        {title: req.body.title,},
          {start: req.body.start,},
          {end: req.body.end,});
        
      res.json(calendar);}
    catch(err){
     console.error(err);
     next(err);}
   });

   


module.exports = router;