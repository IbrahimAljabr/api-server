'use strict';

const express = require('express');
const validator = require('../middleware/validator.js');
const Clothes = require('../models/data-collection-class.js');
const clothesModle =require('../models/clothes.js')
const clothes = new Clothes(clothesModle);
const router = express.Router();

router.get('/', getCloths);
router.get('/:id',validator,  getClothsById);
router.post('/', createCloths);
router.put('/:id',validator,  updateCloths);
router.delete('/:id',validator,  deleteCloths);




async function getCloths(req, res,next) {
  try {
    const resObj = await clothes.read();
    res.json(resObj);

  }catch (err) {
    next(err);
  }
}

async function getClothsById(req, res,next) {
  try {
    const resObj = await clothes.read(req.params.id);
    res.json(resObj[0]);
  }catch (err) {
    next(err);
  }
}

async function createCloths(req, res,next) {
  try {
    const clothesObject = await req.body;
    const resObj = clothes.create(clothesObject);
    res.status(201).json(await resObj);
  }catch (err) {
    next(err);
  }
}

async function updateCloths(req, res,next) {
  try {
    const clothesObject = await req.body;
    const resObj = clothes.update(req.params.id, clothesObject);
    res.json(await resObj);
  }catch (err) {
    next(err);
  }
}

async function deleteCloths(req, res,next) {
  try {
    const resObj = await clothes.delete(req.params.id);
    res.json(null);
  }catch (err) {
    next(err);
  }
}

module.exports = router;