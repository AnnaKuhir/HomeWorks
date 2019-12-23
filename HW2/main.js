//1
let name = prompt('What is your name?');
const sayHi = (time) => {
  if (time>=6 && time<12){
    console.log(`Good morning, ${name}!`)
  } else if (time>=12&&time<18){
    console.log(`Good afternoon, ${name}!`)
  } else if(time>=18 && time<=24){
    console.log(`Good evening, ${name}!`)
  } else if (time>=0 && time<6){
    console.log(`Good night, ${name}!`)
  } else {
    console.log('Incorrect time')
  }
}
sayHi(25); // Incorrect time

//2
let checkMail = 'anna.kuhir@mail.ru';
let checkPassword = '123qwerty123';
const dataChecking = (email, password) => {
  if (email==checkMail && password==checkPassword){
    console.log('Access successful')
  } else{
    console.log('Access denied')
  }
}
dataChecking('anna.kuhir@mail.ru', '123qwerty123'); // Access successful

//3
let checkEvenOrOdd = (number) => {
  if (number % 2 == 0){
    console.log(`Number ${number} is Even`)
  } else{
    console.log(`Number ${number} is Odd`)
  }
};
checkEvenOrOdd(23); //Number 23 is Odd

//4
let floor = 9;
let appartments = 3;
let sumOfAppartments = floor*appartments;
const getInformation = (number) =>{
   let porch = Math.ceil((number/appartments)/floor);
   let getFloor = Math.trunc(((number-1)%sumOfAppartments)/appartments+1);
    console.log(`Floor: ${getFloor}, Porch: ${porch}`)
}
getInformation(25) //Floor: 9, Porch: 1

//5
const foo = (number) =>{
  if(number%2==0){
    let sum = eval(number.toString().split('').join('+'));
    console.log(sum); 
  } else{
    let mul = eval(number.toString().split('').join('*'));
    console.log(mul);
  }
}
foo(314); //6
foo(125);  //10

