
// import aWorker from './file.worker.js';
// importScripts('./file.worker.js')
import {test} from '../utils/index'
test()

postMessage('init')
this.a()
self.addEventListener('message', event => {
  postMessage(`接受到父级的message，返回消息:$\{${event.data}\}`)
  close()
});
onmessage = function(e) {
  this.console.log('worker_message', e.data)
}


console.log('this', this)
