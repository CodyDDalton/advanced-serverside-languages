const express = require('express');
const router = express.Router()
const productCtrl = require('../controllers/Products');

//show all products
router.get('/', productCtrl.index)
//create new product
router.get('/new', productCtrl.form)
//show one product of ID
router.get('/:id', productCtrl.show)
// edit form of id
router.get('/:id/edit', productCtrl.form)
//post to endpoint
router.post('/', productCtrl.create)
//update existing post by id
router.post('/:id', productCtrl.update)
//delete existing post by id
router.delete('/:id', productCtrl.remove)
router.post('/:id/delete', productCtrl.remove)

module.exports = router