const signal = require('../../service/listen/callback/callback');
const action = require('./reduce.action');

/*
监听全局事件中心分发reduce处理
*/

module.exports = signal.listener$.filter(function(config){
    return config;
}).flatMap(function (config) {
    return action(config);
}).subscribe(function (config) {
    console.log(config);
}, function (error) {
    console.log(error);
})