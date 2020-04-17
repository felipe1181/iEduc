const models = require('../../models/');

module.exports = {
    store(req, res) {
        try {
            const { name, email, password } = req.body;
            const userSuccess = models.Users.create({ name, email, password });
            return res.json(userSuccess);
        } catch (error) {
            return res.status(500).send('Erro ao criar usuário : ' + error);
        }
    }
};

