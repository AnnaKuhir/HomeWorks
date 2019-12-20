//#1
let quantity = 50;
console.log(quantity);

let phrase = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis similique eaque vitae, facere qui molestias delectus quod asperiores doloremque cumque.';
console.log(phrase);

let isSmaller = 3<1;
console.log(isSmaller); //false

let age;
console.log(age);  //undefined

let addInformation = null;
console.log(addInformation); //null

//#2

let book = {
  name:'The Master and Margarita',
  author: 'Mikhail Bulgakov',
  isPoem: false,
  isNovel: true,
  numberOfChapters: 32,
  numberOfParts: 2,
  bookCirculation: 30000,
  price: 300,
  nameOfBublisher: 'Azbuka',
  quantity: 30,
}
console.log(book);

//#3

let getBookAttributes = () => {
  console.log(book);
}
getBookAttributes();

//#4

book.getBookAttributes=function(){
  console.log(book);
}
getBookAttributes();


//#5

const array = [
  {
    name:'The Master and Margarita',
    author: 'Mikhail Bulgakov',
    isPoem: false,
    isNovel: true,
    numberOfChapters: 32,
    numberOfParts: 2,
    bookCirculation: 30000,
    price: 300,
    nameOfBublisher: 'Azbuka',
    quantity: 30,
  },

  {
    name:'The Idiot',
    author: 'Fyodor Dostoyevsky',
    isPoem: false,
    isNovel: true,
    numberOfChapters: 50,
    numberOfParts: 4,
    bookCirculation: 4000,
    price: 400,
    nameOfBublisher: 'Filio',
    quantity: 60,
  },

  {
    name:'War and Peace',
    author: ' Leo Tolstoy',
    isPoem: false,
    isNovel: true,
    numberOfChapters: 324,
    numberOfParts: 17,
    bookCirculation: 36000000,
    price: 500,
    nameOfBublisher: 'Vremya',
    quantity: 1000,
  },

  {
    name:'The importance of being earnest',
    author: 'Oscar Wilde',
    isPoem: false,
    isNovel: false,
    numberOfChapters: 3,
    numberOfParts: 1,
    bookCirculation: 9000,
    price: 300,
    nameOfBublisher: 'Logos',
    quantity: 500,
  },

  {
    name:'1984',
    author: 'George Orwell',
    isPoem: false,
    isNovel: false,
    numberOfChapters: 24,
    numberOfParts: 3,
    bookCirculation: 900,
    price: 150,
    nameOfBublisher: 'Ozon',
    quantity: 60,
  }
]

let getObjectFromArray = (index) =>{
  console.log(array[index]);
}

getObjectFromArray(4); // last element of an array

