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

function uuidv4() {
    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

let newArray = [];

class Student {
    constructor({ name, surname, ratingPoint, schoolPoint }) {
        this.id = uuidv4();
        this.name = name;
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
        newArray.push(this);
    }

    getEducationForm() {
        return this.isSelfPayment ? 'контракт' : 'бюджет'
    }

    getFullInfo() {
        return `Я - ${this.name} ${this.surname}, рейтинговый балл - ${this.ratingPoint}, форма обучения - ${this.getEducationForm()}`
    }

    getRankedPlace() {
        studentsArr.sort((a, b) => {
            return b.ratingPoint - a.ratingPoint
        })
        return studentsArr.findIndex(item => item.name == this.name) + 1;
    }
}

// let student = new Student(studentsArr[0]);
// console.log(student);
// console.log(studentsArr);
// console.log(student.getRankedPlace());
// console.log(student.getFullInfo());

const setAllCreatedStudentsByConstructor = studentsArr => {
    let arrayOfStudents = [];
    studentsArr.forEach(function (student) {
        let ourStudents = new Student(student);
        arrayOfStudents.push(ourStudents);
    })
    console.log(arrayOfStudents);

    let studentsOnBudget = [];
    let studentsOnContract = [];

    arrayOfStudents.forEach(function (student) {
        if (student.ratingPoint < 800) {
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


//   2


console.log('///////////////  2  ////////////////////')


let student = new Student(studentsArr[0])
console.log(student.getFullInfo());

//   3

console.log('//////////////  3  /////////////////////')

console.log(student.getRankedPlace());


//   4

console.log('//////////////  4  /////////////////////')

class Intern extends Student {
    constructor({ name, surname, ratingPoint, schoolPoint }, companyName) {
        super({ name, surname, ratingPoint, schoolPoint })
        this.companyName = companyName
    }
    getFullInternInfo(){
        let str = '';
        for (let key in this) {
            str += key + ': ' + this[key] +', '
        }
        return str;
    }
}

const intern = new Intern(student, 'Google');

console.log(intern);

//   5

console.log('//////////////  5  /////////////////////')
console.log(intern.getFullInternInfo());
