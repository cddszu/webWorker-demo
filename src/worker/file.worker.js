
// import aWorker from './file.worker.js';
// importScripts('./file.worker.js')
import {recurFib} from '../utils/index'

self.addEventListener('message', event => {
  
  console.time(`recurFibWorker-${event.data}`)
  let result = recurFib(event.data)
  console.timeEnd(`recurFibWorker-${event.data}`)
  postMessage(`运算结果${result}`)
});
onmessage = function(e) {
  this.console.log('worker_message', e.data)
}

