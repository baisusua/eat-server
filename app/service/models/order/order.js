const bson = require('bson');
const $model = require("../../../tools/model/model");
const OrderListTable = require('../../../models/models').orderList;

/*
添加一个食物
*/
const add = function (config) {
    config.id = bson.ObjectId().toString();
    return $model(OrderListTable, 'create', config);
}

/*
批量添加食物
*/
const bulkCreate = function (config) {
    config.forEach(function (item, index) {
        item.id = bson.ObjectId().toString();
    });
    return $model(OrderListTable, 'bulkCreate', config);
}

/*
查询一个食物
*/
const selectOne = function (config) {
    return $model(OrderListTable, 'findOne', config);
}
/*
查询所有食物
*/
const selectAll = function (config) {
    return $model(OrderListTable, 'findAll', config);
}

/*
更新食物
*/
const update = function (config) {
    return $model(OrderListTable, 'update', config);
}

/*
删除食物
*/
const destroy = function (config) {
    return $model(OrderListTable, 'destroy', config);
}

module.exports = {
    add: add,
    bulkCreate:bulkCreate,
    selectOne: selectOne,
    selectAll: selectAll,
    update: update,
    destroy: destroy
}