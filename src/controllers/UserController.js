const Users = require('../models/Users');

module.exports = {
    store(req, res) {
        try {
            const { name, email, password } = req.body;
            const userSuccess = Users.create({ name, email, password });
            return res.json(userSuccess);
        } catch (error) {
            return res.status(500).send('Erro ao criar usuário : ' + error);
        }
    }
};

