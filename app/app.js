const express = require('express');
const bodyParser = require('body-parser');
const log = require("./tools/logs/logHelper");

/*路由*/
const foodRoute = require("./routes/food/food");
const userRoute = require("./routes/user/user");
const orderRoute = require("./routes/order/order");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
/*
启用日志模块
*/
foodRoute(app);
userRoute(app);
orderRoute(app);
log.use(app);
app.listen(4400, function () {
  console.log('app is listening at port 4400');
});

