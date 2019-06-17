function all(promise1, promise2) {
  let counter = 0;
  let arr = [];

  var promise = new Promise(resolve => {
    function triggerResolve(data, index) {
      arr[index] = data;
      counter++;
      if (counter == 2) resolve(arr);
    }
    promise1.then(data => triggerResolve(data, 0));
    promise2.then(data => triggerResolve(data, 1));
  });
  return promise;
}

all(getPromise1(), getPromise2()).then(data => console.log(data));
