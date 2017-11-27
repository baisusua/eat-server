/*
user_list表
*/
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('user_list', {
		id: {
			type: DataTypes.STRING(24),
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: true
		},
		identity: {
			type: DataTypes.INTEGER,
			allowNull: true
		}, 
		status: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'user_list'
	});
};