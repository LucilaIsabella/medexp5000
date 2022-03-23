const { check } = require("express-validator");
const { validateResult } = require("./validateHelper");

const validateCreate = [
    check('identidad')
    .exists()
    .not()
    .isEmpty(),
    (req, res, next)=>{
        validateResult(req, res, next)
    }
]

const validatenew = [
    check('identidad')
        .exists()
        .not()
        .isEmpty()
        .isNumeric()
        .isLength({max:13})
        .isLength({min:13}),
    check('fecha')
        .exists()
        .not()
        .isEmpty(),
        check('descripcion')
        .exists()
        .not()
        .isEmpty(),
        check('registro')
        .exists()
        .not()
        .isEmpty(),
        check('ultimaActualizacion')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) =>{
        validateResult(req, res, next)
    }
]
const validateupdate = [
    check('identidad')
        .exists()
        .not()
        .isEmpty()
        .isNumeric()
        .isLength({max:13})
        .isLength({min:13}),
    check('fecha')
        .exists()
        .not()
        .isEmpty(),
        check('descripcion')
        .exists()
        .not()
        .isEmpty(),
    check('registro')
        .exists()
        .not()
        .isEmpty(),
        check(' ultimaActualizacion')
        .exists()
        .not()
        .isEmpty(),
       
    (req, res, next) =>{
        validateResult(req, res, next)
    }
]


module.exports = { validateCreate, validatenew, validateupdate }