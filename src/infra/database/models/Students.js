const { Model, DataTypes } = require('sequelize');
class Students extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            address: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}
module.exports = Students;
