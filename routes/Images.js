const express = require('express');
const router = express.Router()
const imageCtrl = require('../controllers/Images');

// Loading in our new middleware
const { uploadImage } = require('../middlewares')

//show all products
router.get('/', imageCtrl.index)
//create new product
router.get('/new', imageCtrl.form)
//show one product of ID
router.get('/:id', imageCtrl.show)
// edit form of id
router.get('/:id/edit', imageCtrl.form)
// added our uploadImage middleware to our create route
router.post('/', imageCtrl.create, uploadImage)
// ade our uploadImage middleware to our update route
router.post('/:id', imageCtrl.update, uploadImage)
//delete existing post by id
router.get('/:id/delete', imageCtrl.remove)

module.exports = router