router = require('express').Router(); 

const requestController = require('./controller/requestController');

router.post('/message', requestController.handleMessage);

module.exports = router;