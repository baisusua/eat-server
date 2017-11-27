/*
order_list
*/
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('order_list', {
		id: {
			type: DataTypes.STRING(24),
			primaryKey: true
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		date: {
			type: DataTypes.STRING(24),
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'order_list'
	});
};