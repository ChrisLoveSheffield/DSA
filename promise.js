function p(n, b) {
    return new Promise((resolve, reject) => {
      if (b) {
        resolve(n);
      } else {
        reject('erro');
      }
    });
}

p(1, true)
  .then((result) => {
    throw new Error('Something failed');
      return result
      
  })
  .then(result => {
    console.log(result);
  })
  .catch(error=>{
      console.log(error)
  }).then((result)=>{
      console.log(1)
  })

  function delayAdd(x, y) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const r = x + y;
        resolve(r);
      }, Math.random() * 2000);
    });
  }
