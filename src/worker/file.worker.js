
var pollingWorker = function (e) {
  let data = 1

  setInterval(function () {
    postMessage(data++);
  }, 1000)
}

postMessage('init')

self.addEventListener('message', event => {
  postMessage(`接受到父级的message，返回消息:$\{${event.data}\}`)
});
export default pollingWorker