/*
接受对方回调
*/
const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/food/food.ctrl');

module.exports = function (app) {
    app.get('/v1/food/list', function (req, res) {

        ctrl.getListCtrl().subscribe((data) => {
            /*  */
            if (data) {
                if (data.length > 0) {
                    res.send({
                        code: 200,
                        result: data
                    });
                } else {
                    res.send({
                        code: 4102,
                        result: []
                    });
                }
            } else {
                res.send({
                    code: 4102,
                    result: []
                });
            }
        }, (error) => {
            console.log(error);
        });
    })
    app.post('/v1/food/create/all', function (req, res) {
        if (req.body.list) {
            const list = JSON.parse(req.body.list);
            if (req.body.list.length > 0) {
                ctrl.createCtrl(req.body.list).subscribe((data) => {
                    if (!data.SequelizeDatabaseError) {
                        res.send({
                            code: 200,
                            message: '创建foodList成功'
                        });
                    } else {
                        res.send({
                            code: 4001,
                            message: '创建foodList成功数据库错误'
                        });
                    }
                }, (error) => {
                    console.log(error);
                });
            } else {
                res.send({
                    code: 4004,
                    message: 'list不能为[]'
                });
            }
        } else {
            res.send({
                code: 4004,
                message: 'body缺少list'
            });
        }
    })
    app.post('/v1/food/create/one', function (req, res) {
        if (req.body) {
            const name = req.body.name;
            const price = req.body.price;
            if (name && price) {
                ctrl.addCtrl({
                    name: name,
                    price: price
                }).subscribe((data) => {
                    /*  */
                    if (!data.SequelizeDatabaseError) {
                        res.send({
                            code: 200,
                            message: '创建food成功'
                        });
                    } else {
                        res.send({
                            code: 4001,
                            message: '创建food成功数据库错误'
                        });
                    }
                }, (error) => {
                    console.log(error);
                });
            } else {
                res.send({
                    code: 4004,
                    message: 'price或者name不能为空'
                });
            }
        } else {
            res.send({
                code: 4004,
                message: '缺少body'
            });
        }
    })
    app.post('/v1/food/update/one', function (req, res) {
        if (req.body) {
            const id = req.body.id;
            const name = req.body.name;
            const price = req.body.price;
            const config = {
                id: id,
                data: {
                    name: name,
                    price: price
                }
            }
            if (id && name && price) {
                ctrl.updateCtrl(config).subscribe((data) => {
                    /*  */
                    if (!data.SequelizeDatabaseError) {
                        res.send({
                            code: 200,
                            message: '更新food成功'
                        });
                    } else {
                        res.send({
                            code: 4001,
                            message: '更新food成功数据库错误'
                        });
                    }
                }, (error) => {
                    console.log(error);
                });
            } else {
                res.send({
                    code: 4004,
                    message: 'id、price或者name不能为空'
                });
            }
        } else {
            res.send({
                code: 4004,
                message: '缺少body'
            });
        }
    })
    app.post('/v1/food/delete/one', function (req, res) {
        if (req.body) {
            const id = req.body.id;
            if (id) {
                ctrl.deleteCtrl(id).subscribe((data) => {
                    /*  */
                    if (!data.SequelizeDatabaseError) {
                        res.send({
                            code: 200,
                            message: '删除food成功'
                        });
                    } else {
                        res.send({
                            code: 4001,
                            message: '删除food成功数据库错误'
                        });
                    }
                }, (error) => {
                    console.log(error);
                });
            } else {
                res.send({
                    code: 4004,
                    message: 'id不能为空'
                });
            }
        } else {
            res.send({
                code: 4004,
                message: '缺少body'
            });
        }
    })
}