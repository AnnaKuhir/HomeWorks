const emplyeeArr = [
  {
      id: 0,
      name: 'Денис',
      surname: 'Хрущ',
      salary: 1010, 
      workExperience: 10, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
  {
      id: 1,
      name: 'Сергей',
      surname: 'Войлов',
      salary: 1200, 
      workExperience: 12, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
  {
      id: 2,
      name: 'Татьяна',
      surname: 'Коваленко',
      salary: 480, 
      workExperience: 3, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'female'
  },
  {
      id: 3,
      name: 'Анна',
      surname: 'Кугир',
      salary: 2430, 
      workExperience: 20, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'female'
  },
  {
      id: 4,
      name: 'Татьяна',
      surname: 'Капустник',
      salary: 3150, 
      workExperience: 30, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'female'
  },
  {
      id: 5,
      name: 'Станислав',
      surname: 'Щелоков',
      salary: 1730, 
      workExperience: 15, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
  {
      id: 6,
      name: 'Денис',
      surname: 'Марченко',
      salary: 5730, 
      workExperience: 45, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'male'
  },
  {
      id: 7,
      name: 'Максим',
      surname: 'Меженский',
      salary: 4190, 
      workExperience: 39, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
  {
      id: 8,
      name: 'Антон',
      surname: 'Завадский',
      salary: 790, 
      workExperience: 7, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
  {
      id: 9,
      name: 'Инна',
      surname: 'Скакунова',
      salary: 5260, 
      workExperience: 49, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'female'
  },
  {
      id: 10,
      name: 'Игорь',
      surname: 'Куштым',
      salary: 300, 
      workExperience: 1, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
];


//1.1
// function Employee(id, name, surname, salary, workExperience, isPrivileges, gender){
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.salary = salary;
//   this.workExperience = workExperience;
//   this.isPrivileges = isPrivileges;
//   this.gender = gender;
// }
// const employeeObj = new Employee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');
// console.log(employeeObj);

//1.2
function Employee({ id, name, surname, salary, workExperience, isPrivileges, gender }) {
  this.id = id;
  this.name = name || 'No name';
  this.surname = surname;
  this.salary = salary;
  this.workExperience = workExperience;
  this.isPrivileges = isPrivileges;
  this.gender = gender;
}

const employeeObj = new Employee({
  id: 20,
  name: 'Alla',
  surname: 'Ivanova',
  salary: 500,
  workExperience: 10,
  isPrivileges: true,
  gender: 'famale',
});
console.log(employeeObj);

//2
Employee.prototype.getFullName = function(){
  return this.surname + " " + this.name;
}
console.log(employeeObj.getFullName());


//3
let createEmployesFromArr = (arr) => {
  const newArray = [];
  arr.forEach(employee => {
    let newEmployee = new Employee(employee);
    newArray.push(newEmployee);
  });
  return newArray;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.log(emplyeeConstructArr)


//4
const getFullNamesFromArr = (arr) => {
  const newArray = [];
  arr.forEach(employee => {
    let fullName = employee.getFullName();
    newArray.push(fullName);
  });
  return newArray;
};
console.log(getFullNamesFromArr(emplyeeConstructArr));

//5
const getMiddleSalary = (arr) => {
  let averageSalary = 0;
  let allEmployee = arr.length;
  arr.forEach(item =>{
    averageSalary = averageSalary + item.salary;
  })
  return averageSalary/allEmployee;
}
console.log(getMiddleSalary(emplyeeConstructArr));

//6
const getRandomNumber = (maxRandom) => {
  const randomNumber = Math.floor(Math.random() * Math.floor(maxRandom));
  if (randomNumber > maxRandom) {
      getRandomNumber(maxRandom);
  } else {
      return randomNumber;
  }}

  const getRandomEmployee = (arr) => {
     let value = arr.length - 1;
     let indexEmployee = getRandomNumber(value);
     return arr[indexEmployee];
     
  }

  const randomUsers = () =>{
    for (let i =0; i<=10;i++){
      console.log(getRandomEmployee(emplyeeConstructArr));
    }
  }
  randomUsers();

 console.log(getRandomEmployee(emplyeeConstructArr));
