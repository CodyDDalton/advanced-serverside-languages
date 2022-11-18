const express = require('express');
const router = express.Router()
const imageCtrl = require('../controllers/Images');

//show all products
router.get('/', imageCtrl.index)
//create new product
router.get('/new', imageCtrl.form)
//show one product of ID
router.get('/:id', imageCtrl.show)
// edit form of id
router.get('/:id/edit', imageCtrl.form)
//post to endpoint
router.post('/', imageCtrl.create)
//update existing post by id
router.post('/:id', imageCtrl.update)
//delete existing post by id
router.get('/:id/delete', imageCtrl.remove)

module.exports = router