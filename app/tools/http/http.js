const request = require('superagent');
const Rx = require('rx');

const $logger = require('../../tools/logs/logHelper');
const OKCoin = require('../../config/okcoin.json');
const $sign = require('../sign/sign');
module.exports = function (config) {
    const handleError = function (error) {
        $logger.helper.writeErr(error);
        return Rx.Observable.just(error);
    }
    let httpHelper;
    
    if (config.methods) {
        httpHelper = request
            .post(OKCoin.base+config.url)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send($sign(config.data))
    } else {
        httpHelper = request
            .get(OKCoin.base+config.url)
            .set('Content-Type', 'application/x-www-form-urlencoded')
    }
    return Rx.Observable.fromPromise(httpHelper).catch(handleError).map((response) => {
        return JSON.parse(response.text);
    });
}