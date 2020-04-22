const { validationResult } = require("express-validator");
const calculator = require('../services/calculator.service');

exports.division = (req, res, nest) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    const division =  calculator.divide(+req.body.paramone, +req.body.paramtwo);

    const params = {
        body: req.body,
        result: division
    }

    try{
        res.status(201).json({ message: 'division', params });
    } catch(err){

         const error = new Error('Error');
         error.statusCode = 500;
         error.data = err;
         throw error;
    }
}