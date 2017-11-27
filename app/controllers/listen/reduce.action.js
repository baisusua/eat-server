const sellReduce = require('../trade/sell.ctrl');
const buyReduce = require('../trade/buy.ctrl');
const accountReduce = require('../account/account.ctrl');

module.exports = function(config){
    let render;
    switch(config.type){
        case 'sell':
            render = sellReduce(config.data);
        break;
        case 'buy':
            render = buyReduce(config.data);
        break;
        case 'account':
            render = accountReduce(config.data)
        break;
        
        default:
        
    }
    return render;
}