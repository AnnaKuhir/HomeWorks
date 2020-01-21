
class Condidate {
  constructor(condidate) {
    this.condidate = condidate;
  }

  get state() {
    return this.condidate.address.split(',').slice(2, 3).join();
  }

  get registered() { 
    return new Date(this.condidate.registered.split(' ')[0]);
}

  get addressInfo() {
    let adressArr = this.condidate.address.split(',');
    return {
      street: adressArr[0],
      city: adressArr[1],
      state: adressArr[2],
      postalCode: adressArr[3]
    }
  }

  get allFriends() {
    let userFriends = this.condidate.friends.map(friend => {
        return friend.name.split(' ')[0];
    })
    return userFriends.join(', ');
}

}
const condidate = new Condidate(condidateArr[0])
console.log(condidate)
console.log('-----------------------------1-------------------------------')
console.log(condidate.state)

console.log('-----------------------------2-------------------------------')
console.log(condidate.registered)

console.log('-----------------------------3-------------------------------')
deleteElement = n => {
  return condidateArr.splice(n, 1)
}
console.log(condidateArr);
deleteElement(0);
console.log(condidateArr);

console.log('-----------------------------4-------------------------------')
console.log(condidate.allFriends)

console.log('-----------------------------5-------------------------------')
getKeyOfObject = n => {
  return Object.keys(condidateArr[n])
};
console.log(getKeyOfObject(1));

console.log('-----------------------------5.1-------------------------------')

function getAllKeys(param) {
  let userKeys = []
  for (let key in param) {
    userKeys.push(key)
  }
  return userKeys
}
console.log(getAllKeys(condidateArr[0]));

console.log('-----------------------------6-------------------------------')
getValueOfObject = n => {
  return Object.values(condidateArr[n])
};
console.log(getValueOfObject(1));

console.log('-----------------------------7-------------------------------')
console.log(condidate.addressInfo);

console.log('-----------------------------8-------------------------------')
// const obj = new Condidate({
//   id: 3,
//   name: 'Vasya'
// })
// newElement = (obj, n) => {
//   return condidateArr.unshift(obj,)
// }

// console.log(newElement(obj, 5))
// console.log(condidateArr)