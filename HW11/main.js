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
  console.log(await promiseSecond());
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

   secondPromise = () => {
    return new Promise(
      function(resolve, reject){
        setTimeout(() => resolve( count = count + 1), 2000);
      }
    )
  }

  getPromise =  () => {
    promise
      .then(secondPromise)
      .then(function(fullresult){console.log(fullresult)})
  }

  getPromise()
}

fooSecond()



//------------------------------------------------------------2----------------------------------------------------------

// const getBooks = async(n = 1) => {
//   let books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=quilting=${n}`);
//   books = await books.json()
//   return books.items
// }

// getBooks(1).then(books => console.log(books))