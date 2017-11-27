const userModel = require('../../service/models/user/user');

/*
food相关控制器（增删改查以及批量创建数据）
*/
function createCtrl(config) {
    /* 
    [{}.{}]
    */
    return userModel.bulkCreate(config).filter(function (data) {
        return data
    }).map(function (args) {
        return args;
    })
}

function addCtrl(config) {
    /* {} */
    return userModel.add(config).filter(function (data) {
        return data
    }).map(function (args) {
        return args;
    })
}

function getOneCtrl(name) {
    /* {} */
    return userModel.selectOne({
        where: {
            name: {
                '$like': name
            }
        }
    }).map(function (args) {
        return args;
    })
}

function getListCtrl() {
    /* {} */
    return userModel.selectAll().filter(function (data) {
        return data
    }).map(function (args) {
        return args;
    })
}

function updateCtrl(config) {
    /* [{}] 暂不支持批量更新*/
    return userModel.update([
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
    return userModel.destroy({
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