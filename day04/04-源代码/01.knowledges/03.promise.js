let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('时间到')
  }, 1000);
})

p.then(res=>{
  console.log(res)
})