const bson = require('bson');
const $model = require("../../../tools/model/model");
const UserListTable = require('../../../models/models').userList;

/*
添加用户资料
*/
const add = function (config) {
    config.id = bson.ObjectId().toString();
    return $model(UserListTable, 'create', config);
}

/*
批量添加用户
*/
const bulkCreate = function (config) {
    config.forEach(function (item, index) {
        item.id = bson.ObjectId().toString();
    });
    return $model(UserListTable, 'bulkCreate', config);
}

/*
查询单个用户
*/
const selectOne = function (config) {
    return $model(UserListTable, 'findOne', config);
}
/*
查询所有用户
*/
const selectAll = function (config) {
    return $model(UserListTable, 'findAll', config);
}

/*
更新用户资料
*/
const update = function (config) {
    return $model(UserListTable, 'update', config);
}

/*
删除用户
*/
const destroy = function (config) {
    return $model(UserListTable, 'destroy', config);
}

module.exports = {
    add: add,
    selectOne: selectOne,
    bulkCreate: bulkCreate,
    selectAll: selectAll,
    update: update,
    destroy: destroy
}