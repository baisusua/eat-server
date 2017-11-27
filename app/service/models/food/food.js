const bson = require('bson');
const $model = require("../../../tools/model/model");
const FoodListTable = require('../../../models/models').foodList;

/*
添加一个食物
*/
const add = function (config) {
    config.id = bson.ObjectId().toString();
    return $model(FoodListTable, 'create', config);
}

/*
批量添加食物
*/
const bulkCreate = function (config) {
    config.forEach(function (item, index) {
        item.id = bson.ObjectId().toString();
    });
    return $model(FoodListTable, 'bulkCreate', config);
}

/*
查询一个食物
*/
const selectOne = function (config) {
    return $model(FoodListTable, 'findOne', config);
}
/*
查询所有食物
*/
const selectAll = function (config) {
    return $model(FoodListTable, 'findAll', config);
}

/*
更新食物
*/
const update = function (config) {
    return $model(FoodListTable, 'update', config);
}

/*
删除食物
*/
const destroy = function (config) {
    return $model(FoodListTable, 'destroy', config);
}

module.exports = {
    add: add,
    bulkCreate:bulkCreate,
    selectOne: selectOne,
    selectAll: selectAll,
    update: update,
    destroy: destroy
}