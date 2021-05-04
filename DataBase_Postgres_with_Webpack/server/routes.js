const Router = require('express');
const router = new Router();
const personsController = require('./controller');



router.get('/', personsController.getPersons);
router.get('/1', personsController.getPersons1);
router.get('/2', personsController.getPersons2);
router.get('/3', personsController.getPersons3);
router.get('/4', personsController.getPersons4);
router.get('/5', personsController.getPersons5);
router.get('/6', personsController.getPersons6);
router.get('/7', personsController.getPersons7);
router.get('/8', personsController.getPersons8);
router.get('/9', personsController.getPersons9);
router.get('/10', personsController.getPersons10);



module.exports = router;