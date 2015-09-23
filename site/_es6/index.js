var _ = require('lodash');
import { pick } from 'lodash';
const i = 1;
function hw() {
  var conf = {
    name: 'Me!',
    msg: 'hola!'
  };
  console.log(pick(conf, 'msg'), i);
}
hw();
module.exports = {
  start: true
};
