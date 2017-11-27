const orderModel = require('../../service/models/order/order');
const userTable = require('../../models/models').userList;
const foodTable = require('../../models/models').foodList;
/*
food相关控制器（增删改查以及批量创建数据）
*/
function createCtrl(config) {
    /* 
    [{}.{}]
    */
    return orderModel.bulkCreate(config).map(function (args) {
        return args;
    })
}

function addCtrl(config) {
    /* {} */
    return orderModel.add(config).map(function (args) {
        return args;
    })
}

function getOneCtrl(config) {
    /* {
            name: {
                '$like': name
            }
        } */
    return orderModel.selectOne({
        include: [userTable,foodTable],
        where: config
    }).map(function (args) {
        return args;
    })
}

function getListCtrl(config) {
    /* {} */
    return orderModel.selectAll({
        include: [userTable,foodTable],
        where: config
    }).map(function (args) {
        return args;
    })
}

function updateCtrl(config) {
    /* [{}] 暂不支持批量更新*/
    return orderModel.update([
        config.data, {
            where: {
                id: config.id
            }
        }
    ]).map(function (args) {
        return args;
    })
}

function deleteCtrl(id) {
    /* {} */
    return orderModel.destroy({
        where: {
            id: id
        }
    }).map(function (args) {
        return args;
    })
}
module.exports = {
    createCtrl: createCtrl,
    addCtrl: addCtrl,
    getOneCtrl: getOneCtrl,
    getListCtrl: getListCtrl,
    updateCtrl: updateCtrl,
    deleteCtrl: deleteCtrl
}