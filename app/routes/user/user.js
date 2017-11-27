/*
接受对方回调
*/
const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/user/user.ctrl');

module.exports = function (app) {
    app.get('/v1/user/list', function (req, res) {

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
    app.get('/v1/user/name/:name', function (req, res) {
        if (req.params && req.params.name) {
            ctrl.getOneCtrl(req.params.name).subscribe((data) => {
                /*  */
                if (data) {

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
            }, (error) => {
                console.log(error);
            });
        } else {
            res.send({
                code: 4004,
                message: '缺少params参数name'
            });
        }

    })
    app.post('/v1/user/create/all', function (req, res) {
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
    app.post('/v1/user/create/one', function (req, res) {
        if (req.body) {
            const name = req.body.name;
            const password = req.body.password;
            if (name && password) {
                ctrl.addCtrl({
                    name: name,
                    password: password
                }).subscribe((data) => {
                    /*  */
                    if (!data.SequelizeDatabaseError) {
                        res.send({
                            code: 200,
                            message: '创建user成功'
                        });
                    } else {
                        res.send({
                            code: 4001,
                            message: '创建user成功数据库错误'
                        });
                    }
                }, (error) => {
                    console.log(error);
                });
            } else {
                res.send({
                    code: 4004,
                    message: 'name或者password不能为空'
                });
            }
        } else {
            res.send({
                code: 4004,
                message: '缺少body'
            });
        }
    })
    app.post('/v1/user/update/one', function (req, res) {
        if (req.body) {
            const id = req.body.id;
            const name = req.body.name;
            const password = req.body.password;
            const config = {
                id: id,
                data: {
                    name: name,
                    password: password
                }
            }
            if (id && name && password) {
                ctrl.updateCtrl(config).subscribe((data) => {
                    /*  */
                    if (!data.SequelizeDatabaseError) {
                        res.send({
                            code: 200,
                            message: '更新user成功'
                        });
                    } else {
                        res.send({
                            code: 4001,
                            message: '更新user成功数据库错误'
                        });
                    }
                }, (error) => {
                    console.log(error);
                });
            } else {
                res.send({
                    code: 4004,
                    message: 'name或者password不能为空'
                });
            }
        } else {
            res.send({
                code: 4004,
                message: '缺少body'
            });
        }
    })
    app.post('/v1/user/delete/one', function (req, res) {
        if (req.body) {
            const id = req.body.id;
            if (id) {
                ctrl.deleteCtrl(id).subscribe((data) => {
                    /*  */
                    if (!data.SequelizeDatabaseError) {
                        res.send({
                            code: 200,
                            message: '删除user成功'
                        });
                    } else {
                        res.send({
                            code: 4001,
                            message: '删除user成功数据库错误'
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