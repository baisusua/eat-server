const Rx = require('rx');
const $logger = require('../../tools/logs/logHelper');

module.exports = function (model,type,config) {
    const handleError = function (error) {
        $logger.helper.writeErr(error);
        return Rx.Observable.just(error);
    }
    let modelHelper;
    if(type=='update'){
       modelHelper = model[type](config[0],config[1]);
    }else{
       modelHelper = model[type](config);
    }
    return Rx.Observable.fromPromise(modelHelper).catch(handleError).map((response) => {
        if(response&&response.dataValues){
            return response.dataValues;
        }
        if(Array.isArray(response)){
            let data = [];
            for(let item of response ){
                data.push(item.dataValues);
            }
            return data;
        }
        return response;
    });
}