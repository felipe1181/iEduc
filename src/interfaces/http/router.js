/* eslint-disable import/no-unresolved */
const { Router } = require('express');
const controllersRoutes = require('./RouterLoader');
const router = Router();



/*
   * Add your API routes here
   *
   * You can use the `controllers` helper like this:
   * apiRouter.use('/users', controller(controllerPath))
   *
   * The `controllerPath` is relative to the `interfaces/http` folder
   */
router.use('/users', controllersRoutes.user.UserControllerRouter.modules);


module.exports = router;
