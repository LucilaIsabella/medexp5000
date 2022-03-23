const express = require('express');
const router = express.Router();
const { verifyApiHeaderToken } =
  require('./headerVerifyMiddleware');
const pacientesRoutes = require('./pacientes/pacientes');
 const expedientesRoutes = require('./expedientes/expedientes');

const seguridadRoutes = require('./seguridad/seguridad');

const {passport, jwtMiddleware} = require('./seguridad/jwtHelper');

router.use('/pacientes', pacientesRoutes);
router.use('/expedientes', expedientesRoutes);

router.use(passport.initialize());
//public
router.use('/seguridad', verifyApiHeaderToken, seguridadRoutes);
//middlewares
router.use(
  '/pacientes',
  verifyApiHeaderToken,
  jwtMiddleware,
  pacientesRoutes
);
module.exports = router;