

let p = new Promise((resolve,reject)=>{
  // 这里放了一个耗时的任务
  setTimeout(() => {
    resolve('到时间了')
  }, 1000);
})


p.then(res=>{
  console.log(res)
})
