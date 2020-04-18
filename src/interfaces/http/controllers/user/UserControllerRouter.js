const { Router } = require('express');
const requireDirectory = require('require-directory');
const controllersApp = requireDirectory(module, '../../../../app/');

const userControllerApp = controllersApp.user.UserControllerApp;
const router = Router();

//fazer o Serializer ainda

router.get('/', userControllerApp.index);//SELECIONAR TODOS OS USUÁRIOS
router.get('/:id', userControllerApp.show);
router.post('/', userControllerApp.store);//CRIAR NOVO USUÁRIO
//router.put('/:id', inject('updateUser'), this.update);
//router.delete('/:id', inject('deleteUser'), this.delete);


exports.modules = router;
