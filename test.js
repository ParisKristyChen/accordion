//console.log("hello world");

const codes = [101, 201, 301, 303, 202]
let newCodes = []
newCodes =codes.map(function(code, i){
  return 'room'+code;
})
console.log(newCodes)

const students = [
  {firstName : "John", lastName: "Doe"},
  {firstName : "Stephen", lastName: "Matt"},
  {firstName :"Abigail", lastName: "Susu"}
]
let newStudent = [];

newStudent = students.map(function(student,i){
  return student.firstName + ' ' + student.lastName;//map 所有东西统一做一系列操作，map 用来做group操作
})

console.log(newStudent);

const mathStudents = [
  {
    name: 'Jane',
    score: 60,
    enrollmentYear: 2019
  },
  {
    name: 'Emmy',
    score: 40,
    enrollmentYear: 2020
  },
  {
    name: 'John',
    score: 43,
    enrollmentYear: 2019
  },
  {
    name: 'Linda',
    score: 20,
    enrollmentYear: 2019
  }
]

let newStudents = [];
newStudents = mathStudents
.filter(function(item){
  return item.enrollmentYear <2020
})//filter 所有符合条件的元素组成的数组，寻找多个，包含所有符合条件的
.map(function(student){
  if(student.score >40){
    return student.name + ': passing';
  }else {
    return student.name + ': not passing'
  }
})
console.log(newStudents);
//[Jane: passing', 'John: passing', 'Linda: not passing

const obj = {
  name: 'Jane',
  score: 60,
  enrollmentYear: 2019
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
