/*
food_list
*/
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('food_list', {
		id: {
			type: DataTypes.STRING(24),
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'food_list'
	})
};