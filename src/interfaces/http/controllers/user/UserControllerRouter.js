const { Router } = require('express');
const requireDirectory = require('require-directory');
const controllersApp = requireDirectory(module, '../../../../app/');

const router = Router();

//fazer o Serializer ainda

//router.get('/');
//router.get('/:id', inject('getUser'), this.show);
router.post('/', controllersApp.user.UserControllerApp.store);
//router.put('/:id', inject('updateUser'), this.update);
//router.delete('/:id', inject('deleteUser'), this.delete);


exports.modules = router;
