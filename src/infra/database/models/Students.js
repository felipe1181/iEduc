const { Model, DataTypes } = require('sequelize');
class Student extends Model {
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
        this.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
    }
}
module.exports = Student;
