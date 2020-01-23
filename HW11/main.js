//-----------------------------------------------------async/await------------------------------------------------------
let foo = async() =>{
  let count = 2;

  let promise = () =>{
    return new Promise(
      function(resolve, reject){
        setTimeout(() => resolve( count = count * 2), 3000);
      }
    )
  }

  let promiseSecond = () =>{
    return new Promise(
      function(resolve, reject){
        setTimeout(() => resolve( count = count + 1), 2000);
      }
    )
  }
  await promise();
  let result = await promiseSecond();
  console.log(result);
}

foo()

//------------------------------------------------------------then----------------------------------------------------------

let fooSecond = () =>{
  let count = 2;

  let promise = new Promise(
    function(resolve, reject){
      setTimeout(() => resolve( count = count * 2), 3000);
    }
  )

  let secondPromise = function(getResult){
    return new Promise(
      function(resolve, reject){
        setTimeout(() => resolve( count = count + 1), 2000);
      }
    )
  }

  let getPromise = function (){
    promise
      .then(secondPromise)
      .then(function(fullresult){console.log(fullresult)})
  }

  getPromise()
}

fooSecond()