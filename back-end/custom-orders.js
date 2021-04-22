const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");
const User = users.model;
const validUser = users.valid;
// const comments = require("./comments.js");
// const Comment = comments.model;

// Configure multer so that it will upload to '/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 50000000
  }
});

const customOrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  path: String,
  name: String,
  email: String,
  form: String,
  subject: String,
  color: String,
  addons: String,
  description: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const CustomOrder = mongoose.model('CustomOrder', customOrderSchema);

// upload photo
router.post("/", validUser, upload.single('CustomOrder'), async (req, res) => {
  // check parameters
  if (!req.file)
    return res.status(400).send({
      message: "Must upload a file."
    });

  const order = new CustomOrder({
    user: req.user,
    path: "/images/" + req.file.filename, //what is this doing??
    name: req.body.name,
    email: req.body.email,
    form: req.body.form,
    subject: req.body.subject,
    color: req.body.color,
    addons: req.body.addons,
    description: req.body.description,
  });
  try {
    await order.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get my photos
router.get("/", validUser, async (req, res) => {
  // return photos
  try {
    let customOrders = await CustomOrder.find({
      user: req.user
    }).sort({
      created: -1
    }).populate('user');
    return res.send(customOrders);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get all photos
router.get("/all", async (req, res) => {
  try {
    let photos = await Photo.find().sort({
      created: -1
    }).populate('user');
    return res.send(photos);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

//get single photos
router.get("/:id", async (req, res) => {
  try {
    let order = await CustomOrder.findOne({
      _id: req.params.id
    }).populate('user');
    return res.send(order);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let order = await CustomOrder.findOne({
      _id: req.params.id
    }).populate('user');
    if (!order){
      res.send(404)
      return
    }
    order.form = req.body.form
    order.subject = req.body.subject
    order.color = req.body.color
    order.addons = req.body.addons
    order.description = req.body.description
    await order.save()
    return res.send(order);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let order = await CustomOrder.findOne({
      _id: req.params.id
    }).populate('user');
    if (!order){
      res.send(404)
      return
    }
    await order.delete()
    return res.send(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  model: CustomOrder,
  routes: router,
}
