  let arr =[]
  for(let i=1;i<11;i++){
    arr.push(i)
  }

  console.log('数组初始值:'+arr)

  let total = arr.reduce((function(sum,v){
    // console.log(sum)
    return sum+v
  }),0)

  console.log(total)