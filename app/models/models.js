const Sequelize = require('sequelize');

const dbStorage = require('../db/dbStorage');

const foodList = require('./foodList/foodList.model')(dbStorage, Sequelize);
const orderList = require('./orderList/orderList.model')(dbStorage, Sequelize);
const userList = require('./userList/userList.model')(dbStorage, Sequelize);

/* 关联模型 */
foodList.hasMany(orderList,{targetKey:'id'})
orderList.belongsTo(foodList);
userList.hasMany(orderList,{targetKey:'id'})
orderList.belongsTo(userList);
/*
导出表实例
*/
module.exports={
    foodList:foodList,
    userList:userList,
    orderList:orderList
}