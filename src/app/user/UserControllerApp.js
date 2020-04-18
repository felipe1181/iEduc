const requireDirectory = require('../../infra/sequelize');
const UserModel = requireDirectory.ModelsLoader.Users;

module.exports = {
    async index(req, res) {
        try {
            const userSuccess = await UserModel.findAll();
            return res.json(userSuccess);
        } catch (error) {
            return res.status(500).send('Erro ao selecionar usuários : ' + error);
        }
    },
    async show(req, res) {
        try {
            const userSuccess = await UserModel.findByPk(Number(req.params.id));
            return res.json(userSuccess);
        } catch (error) {
            return res.status(500).send('Erro ao selecionar usuário especifico : ' + error);
        }
    },
    async store(req, res) {
        try {
            const { name, email, password } = req.body;
            const userSuccess = await UserModel.create({ name, email, password });
            return res.json(userSuccess);
        } catch (error) {
            return res.status(500).send('Erro ao criar usuário : ' + error);
        }
    }
};

