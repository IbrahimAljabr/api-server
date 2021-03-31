'use strict';

const express = require('express');
const validator = require('../middleware/validator.js');
const Food = require('../models/data-collection-class.js');
const foodModule = require('../models/food.js');
const food = new Food(foodModule);
const router = express.Router();

router.get('/', getFood);
router.get('/:id', validator, getFoodById);
router.post('/', createFood);
router.put('/:id', validator, updateFood);
router.delete('/:id', validator, deleteFood);




async function getFood(req, res,next) {
  try {
    const resObj = await food.read();
  res.json(resObj);
  }catch (err) {
    next(err);  
  }
  
}

async function getFoodById(req, res,next) {
  
  try {
    const resObj = await food.read(req.params.id);
  res.json(resObj[0]);
}catch (err) {
  next(err);
}

  }

async function createFood(req, res,next) {
  try {
    const foodObject =  req.body;
  const resObj =  food.create(foodObject);
  res.status(201).json(await resObj);
  }catch (err) {
    next(err);
  }
  
}

async function updateFood(req, res,next) {
  
  try {
    const foodObject = await req.body;

  const resObj =  food.update(req.params.id, foodObject);
  res.json(await resObj);
  }catch (err) {
    
    next(err);
  }
  
}

async function deleteFood(req, res,next) {
  try {
    const resObj = await food.delete(req.params.id);
  res.json(null);
  }catch (err) {
    next(err);
  }
  
}

module.exports = router;