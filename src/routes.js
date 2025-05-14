const { Router } = require('express');
const router = Router();

const ContactController = require('./app/controller/ContactController');
const CategoryController = require('./app/controller/CategoryController');

// Contact Routes
router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);


// Category Routes
router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.post('/categories', CategoryController.store);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.delete);


module.exports = router;
