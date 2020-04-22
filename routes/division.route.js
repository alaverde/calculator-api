const express = require("express");
const { body } = require("express-validator");
const operation = require("./../controller/division.controller");

const router = express.Router();

router.post(
    '/divide', [
      body('paramone')
        .exists()
        .withMessage('El paramatro uno es requerido')
        .matches(/^[0-9]+$/, "i")
        .withMessage('El parametro uno debe ser númerico')
        .isLength({ min: 1, max: 3 })
        .withMessage('El parametro uno debe ser entre 1-3 caracteres')
        .trim()
        .escape(),
      body('paramtwo')
        .exists()
        .withMessage('El paramatro dos es requerido')
        .matches(/^[1-9]+$/, "i")
        .withMessage('El parametro dos debe ser númerico y no puede ser cero')
        .isLength({ min: 1, max: 3 })
        .withMessage('El parametro dos debe ser entre 1-3 caracteres')
        .trim()
        .escape()
    ] , 
    operation.division
);

module.exports = router;