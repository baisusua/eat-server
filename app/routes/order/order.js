/*
接受对方回调
*/
const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/order/order.ctrl');

module.exports = function (app) {
    app.get('/v1/order/list', function (req, res) {
        if (req.query.date) {
            const config = {
                date: {
                    '$like': req.query.date
                }
            }
            ctrl.getListCtrl(config).subscribe((data) => {
                /*  */
                console.log(data);
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
        } else {
            res.send({
                code: 4004,
                message: '缺少queryParams参数date'
            });
        }
    })
    app.get('/v1/order/date', function (req, res) {
        if (req.query.date) {
            const config = {
                date: {
                    '$like': req.query.date
                }
            }

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
                            result: ''
                        });
                    }
                } else {
                    res.send({
                        code: 4102,
                        result: ''
                    });
                }
            }, (error) => {
                console.log(error);
            });
        } else {
            res.send({
                code: 4004,
                message: '缺少queryParams参数date'
            });
        }

    })
    app.post('/v1/order/create/one', function (req, res) {
        if (req.body) {
            const user_id = req.body.user_id;
            const food_id = req.body.food_id;
            const price = req.body.price;
            const date = req.body.date;
            if (user_id && food_id && price && date) {
                ctrl.addCtrl({
                    user_list_id: user_id,
                    food_list_id: food_id,
                    price: price,
                    date: date
                }).subscribe((data) => {
                    /*  */
                    if (!data.SequelizeDatabaseError) {
                        res.send({
                            code: 200,
                            message: '创建order成功'
                        });
                    } else {
                        res.send({
                            code: 4001,
                            message: '创建order成功数据库错误'
                        });
                    }
                }, (error) => {
                    console.log(error);
                });
            } else {
                res.send({
                    code: 4004,
                    message: 'body参数不能为空'
                });
            }
        } else {
            res.send({
                code: 4004,
                message: '缺少body'
            });
        }
    })
    app.post('/v1/order/update/one', function (req, res) {
        if (req.body) {
            const id = req.body.id;
            const user_id = req.body.user_id;
            const food_id = req.body.food_id;
            const price = req.body.price;
            const date = req.body.date;
            const config = {
                id: id,
                data: {
                    user_list_id: user_id,
                    food_list_id: food_id,
                    price: price,
                    date: date
                }
            }
            if (id && user_id && food_id && price && date) {
                ctrl.addCtrl(config).subscribe((data) => {
                    /*  */
                    if (!data.SequelizeDatabaseError) {
                        res.send({
                            code: 200,
                            message: '更新order成功'
                        });
                    } else {
                        res.send({
                            code: 4001,
                            message: '更新order成功数据库错误'
                        });
                    }
                }, (error) => {
                    console.log(error);
                });
            } else {
                res.send({
                    code: 4004,
                    message: 'body参数不能为空'
                });
            }
        } else {
            res.send({
                code: 4004,
                message: '缺少body'
            });
        }
    })
    app.post('/v1/order/delete/one', function (req, res) {
        if (req.body) {
            const id = req.body.id;
            if (id) {
                ctrl.deleteCtrl(id).subscribe((data) => {
                    /*  */
                    if (!data.SequelizeDatabaseError) {
                        res.send({
                            code: 200,
                            message: '删除order成功'
                        });
                    } else {
                        res.send({
                            code: 4001,
                            message: '删除order成功数据库错误'
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