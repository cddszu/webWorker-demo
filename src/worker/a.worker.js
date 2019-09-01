onmessage=function(e) {
  console.log('这是一个新的线程', e.data)
  for(let i=1;i<10000;i++) {
    // console.log(i)
  }
  this.console.log(`线程${e.data}运算结束，但是线程没有被关闭`)
  
}