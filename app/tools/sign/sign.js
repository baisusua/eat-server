const md5 = require('md5');
const OKCoin = require('../../config/okcoin.json');

module.exports = function(obj){
    var ParameterName = [];
    var str;
    ParameterName = (Object.keys(obj)).sort();
    for(var i=0;i<ParameterName.length;i++){
        ParameterName[i] = ParameterName[i]+'='+obj[ParameterName[i]];
    }
    str = ParameterName.join('&')+'&secret_key='+OKCoin.secretkey;
    obj.sign = (md5(str)).toLocaleUpperCase();
    return obj;
}