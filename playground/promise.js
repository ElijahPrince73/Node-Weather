
const asyncAdd = (a, b) => {
  return new Promise((resolve, reject)=> {
    setTimeout(() =>{
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('Arguments must numbers')
      }
    }, 1500)
  });
}

asyncAdd(1, '7').then((res) => {
  console.log('Results', res);
  return asyncAdd(res, 33)
}).then((res) => {
  console.log('Should be 36:', res);
}).catch((err) => {
  console.log(err);
})

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey. It worked!');
//     // reject('Unable to fulfill promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
