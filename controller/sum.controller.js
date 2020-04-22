const { validationResult } = require("express-validator");
const calculator = require('../services/calculator.service');

exports.sum = (req, res, nest) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    const sum =  calculator.sum(+req.body.paramone, +req.body.paramtwo);

    const params = {
        body: req.body,
        result: sum
    }

    try{
        res.status(201).json({ message: 'sum', params });
    } catch(err){

         const error = new Error('Error');
         error.statusCode = 500;
         error.data = err;
         throw error;
    }
}