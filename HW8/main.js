const kidsArr = [
  {
    name: 'Kostya',
    age: 10,
    gender: 'male',
  },
  {
    name: 'Vasya',
    age: 9,
    gender: 'male',
  },
  {
    name: 'Masha',
    age: 9,
    gender: 'female',
  },
  {
    name: 'Mitya',
    age: 8,
    gender: 'male',
  },
];


console.log('-------------------1--------------------');

function makeCounter() {
  let initialValue = 0;
  return function (x) {
    return initialValue += x;
  }
}
let counter = makeCounter();
console.log(counter(3));
console.log(counter(5));
console.log(counter(200));


console.log('-------------------2--------------------');

function getValue() {
  let arr = [];
  return function (x) {
    if (x !== undefined) {
      arr.push(x);
      return arr;
    } else {
      arr = [];
    }
  }
}

let getUpdatedArr = getValue();
console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log(getUpdatedArr({ name: 'Vasya' }));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));

console.log('-------------------3--------------------');

let kids = [];

class Kid {
    constructor({ name, age, gender }) {
        this.id = uuidv4();
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    static nextId = 0
}
function uuidv4() {
  return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

for (let value of kidsArr){
  kids.push(new Kid(value));
}; 
console.log(kids)

class Room {
    constructor(kids, roomNumber) {
        this.kids = kids;
        this.roomNumber = roomNumber;
    }

    get kidsCount() {
        return kids.length;
    };

    get femaleCount() {
        let allFemale = 0;
        for(let value of kids){
          if(value.gender === "female"){
            allFemale += 1;
          }
        }
        return allFemale   
    };

    get maleCount() {
        let allMale = 0;
        for(let value of kids){
          if(value.gender === "male"){
            allMale += 1;
          }
        }
        return allMale;   
    };

    get lastKid() {
        return kids[kids.length - 1]
    };

    set lastKid(kid) {
        kid = new Kid(kid);
        kids.push(kid);
    }
}

const room = new Room(kids[1], 101)


console.log(room.kidsCount); 
console.log(room.femaleCount); 
console.log(room.maleCount); 
console.log(room.lastKid);
room.lastKid = { name: 'Kolya', age: 9, gender: 'male' }; 
console.log(room.lastKid); 
console.log(room.kidsCount); 



console.log('-------------------4--------------------');










