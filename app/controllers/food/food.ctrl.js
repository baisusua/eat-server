const foodModel = require('../../service/models/food/food');

/*
food相关控制器（增删改查以及批量创建数据）
*/
function createCtrl(config) {
    /* 
    [{}.{}]
    */
    return foodModel.bulkCreate(config).map(function (args) {
        return args;
    })
}

function addCtrl(config) {
    /* {} */
    return foodModel.add(config).map(function (args) {
        return args;
    })
}

function getOneCtrl(name) {
    /* {} */
    return foodModel.selectOne({
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
    return foodModel.selectAll().map(function (args) {
        return args;
    })
}

function updateCtrl(config) {
    /* [{}] 暂不支持批量更新*/
    return foodModel.update([
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
    return foodModel.destroy({
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