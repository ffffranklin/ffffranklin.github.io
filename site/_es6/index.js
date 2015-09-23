var _ = require('lodash');
const i = 1;
function hw() {
  var conf = {
    msg: 'hola!'
  };
  console.log(_.pick(conf, 'msg'), i);
}
hw();
module.exports = {
  start: true
};
