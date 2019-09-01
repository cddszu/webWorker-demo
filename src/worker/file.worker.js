
// import aWorker from './file.worker.js';
// importScripts('./file.worker.js')
import {recurFib} from '../utils/index'

postMessage('init')
self.addEventListener('message', event => {
  postMessage(`接受到父级的message，返回消息:$\{${event.data}\}`)
  console.time('recurFibWorker')
  recurFib(20)
  console.timeEnd('recurFibWorker')
  close()
});
onmessage = function(e) {
  this.console.log('worker_message', e.data)
}

