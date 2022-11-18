const express = require('express');
const router = express.Router()
const variantCtrl = require('../controllers/Variants');

//show all products
router.get('/', variantCtrl.index)
//create new product
router.get('/new', variantCtrl.form)
//show one product of ID
router.get('/:id', variantCtrl.show)
// edit form of id
router.get('/:id/edit', variantCtrl.form)
//post to endpoint
router.post('/', variantCtrl.create)
//update existing post by id
router.post('/:id', variantCtrl.update)
//delete existing post by id
router.get('/:id/delete', variantCtrl.remove)

module.exports = router