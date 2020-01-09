const studentsArr = [
  {
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 980,
  },
  {
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
  },
  {
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
  },
  {
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
  },
  {
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,

  },
  {
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
  },
  {
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
  },
  {
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
  },
  {
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
  },
  {
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
  },
  {
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
  },
  {
    name: 'Test',
    surname: 'Testname',
    ratingPoint: 1000,
    schoolPoint: 1400,
  },
];

//--------------------------------1----------------------------------

let newArray = [];

function CreateStudent({ name, surname, ratingPoint, schoolPoint }) {
  this.id = newArray.length;
  this.name = name;
  this.surname = surname;
  this.ratingPoint = ratingPoint;
  this.schoolPoint = schoolPoint;
  newArray.push(this);
}

const setAllCreatedStudentsByConstructor = studentsArr => {
  let arrayOfStudents = [];
  studentsArr.forEach(function (student) {
    let ourStudents = new CreateStudent(student);
    arrayOfStudents.push(ourStudents);
  })
  console.log(arrayOfStudents);

  let studentsOnBudget = [];
  let studentsOnContract = [];

  arrayOfStudents.forEach(function (student) {
    if (student.ratingPoint <= 800) {
      student.isSelfPayment = true;
      studentsOnContract.push(student)
    } else {
      student.isSelfPayment = false;
      studentsOnBudget.push(student)
    }
  });
  console.log(studentsOnBudget);
  console.log(studentsOnContract);

  studentsOnBudget.sort(function (studentOne, studentTwo) {
    if (studentOne.ratingPoint === studentTwo.ratingPoint) {
      if (studentOne.schoolPoint > studentTwo.schoolPoint) {
        studentTwo.isSelfPayment = true;
        studentsOnContract.push(studentTwo);
        return -1;
      }
    }
    return studentTwo.ratingPoint - studentOne.ratingPoint;
  })
  console.log(studentsOnContract);

  let topFive = [];

  for (let i = 0; i < 5; i++) {
    topFive.push(studentsOnBudget[i]);
  }
  console.log(topFive);

}

setAllCreatedStudentsByConstructor(studentsArr);

//-----------------------------------------2--------------------------------------------------

function CustomString() {
  this.reverse = str => {
    let newString = "";
    for (let i = str.length; i--;) {
      newString += str[i];
    }
    console.log(newString);
    return newString;
  }

  this.ucFirst = str => {
    console.log(str[0].toUpperCase() + str.slice(1))
    return str[0].toUpperCase() + str.slice(1);
  }
  this.ucWords = str => {
    //-----------------1------------------------
    console.log(str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));

    //------------------2-----------------------
    strVal = '';
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
      strVal += str[i].substring(0, 1).toUpperCase() + str[i].substring(1, str[i].length) + ' '
    }
    console.log(strVal);
    return strVal;
  }

}

const myString = new CustomString();
myString.reverse('qwerty');
myString.ucFirst('qwerty');
myString.ucWords('qwerty qwerty qwerty');

//--------------------------------------3--------------------------------------------------
function Validator() {
  this.checkIsEmail = str => {
    let commercialAt = str.indexOf('@');
    let dots = str.indexOf('.');

    if (str.length === 0) {
      console.log('Please, enter your email!');
      return false;
    } else if (commercialAt < 1 || dots < 1) {
      console.log('Incorrect email!!!');
      return false;
    } else {
      console.log('true');
      return true;
    }
  }

  this.checkIsDomain = str => {
    if (str.includes('.com')) {
      console.log('true');
      return true;
    } else {
      console.log('Incorrect domain!');
      return false;
    }
  }

  const isDigit = function isNumeric(str) {
    return /^\d+$/.test(str);
  }

  this.checkIsDate = str => {
    let arr = str.split('.');
    if (arr[0] <= 31 && arr[1] <= 12 && isDigit(arr[2]) && arr[2].length === 4) {
      console.log('true');
      return true;
    } else {
      console.log('Incorrect date!');
      return false;
    }
  }


  this.checkIsPhone = str => {
    if (str.includes('+38')) {
      console.log('true');
      return true;
    } else {
      console.log('Incorrect phone number!');
      return false;
    }
  }
}



let validator = new Validator();

validator.checkIsEmail('vasya.pupkin@gmail.com'); // true
validator.checkIsDomain('google.com'); // true
validator.checkIsDate('31.11.2000'); // true
validator.checkIsPhone('+38 (066) 937-99-92');  // true