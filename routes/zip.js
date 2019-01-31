var express = require('express');
var router = express.Router();

/* GET zip city and state */

router.get('/:zip', function(req, res, next) {
	var zip = req.params.zip;
	res.locals.connection.query('SELECT city,state_code from location where postal_code=?',zip, function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
			res.status = 200
  			res.send(JSON.stringify(results[0]));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});

module.exports = router;