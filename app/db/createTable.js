var $logger = require('../tools/logs/logHelper');
var tables = require('../models/models');

for(var item in tables){
    tables[item].sync({ force: true });
    $logger.helper.writeInfo('表:'+item+'创建成功!');
}
