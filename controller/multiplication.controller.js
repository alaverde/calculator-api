const { validationResult } = require("express-validator");
const calculator = require('../services/calculator.service');

exports.multiplication = (req, res, nest) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    const multiplication =  calculator.multiply(+req.body.paramone, +req.body.paramtwo);

    const params = {
        body: req.body,
        result: multiplication
    }

    try{
        res.status(201).json({ message: 'multiplication', params });
    } catch(err){

         const error = new Error('Error');
         error.statusCode = 500;
         error.data = err;
         throw error;
    }
}