
class Condidate {
  constructor(condidate) {
    Object.assign(this, condidate);
  }
  get state() {
    return this.address.split(',').slice(2, 3).join();
  }
}

const condidate = new Condidate(condidateArr[0])

console.log('------------------------------------------1-----------------------------------------')
console.log(condidate.state)

console.log('------------------------------------------2-----------------------------------------')
let getNamesCompany = () => {
  let companyNames = [];
  for (let key in condidateArr){
    if(!companyNames.includes(condidateArr[key].company)){
    companyNames.push(condidateArr[key].company)
  }
}
  return companyNames;
}
console.log(getNamesCompany());

console.log('------------------------------------------2.1-----------------------------------------')
const companyArray = condidateArr.map((item) => {
  return item.company
});
const newArray = [...new Set(companyArray)];
console.log(newArray);

console.log('------------------------------------------3-----------------------------------------')
let getUserByYear = year => {
  let result = [];
  for (let key in condidateArr){
    if (Number (condidateArr[key].registered.split('-')[0]) === year){
      result.push(condidateArr[key]._id)
    }
  }
  return result;
}
console.log(getUserByYear(2019));

console.log('------------------------------------------4-----------------------------------------')
let getCondidatesByUnreadMsg = num => {
  let getMessage = []
  condidateArr.map((item) => {
      if (Number(item.greeting.split('!')[1].trim().split(' ')[2]) === num) {
          getMessage.push(item)
      }
  })
  return getMessage
}
console.log(getCondidatesByUnreadMsg(10));


console.log('------------------------------------------5-----------------------------------------')
let getCondidatesByGender = gender => {
  return condidateArr.filter(item => item.gender === gender);
}
console.log(getCondidatesByGender('male'));




