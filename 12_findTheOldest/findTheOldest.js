const findTheOldest = function(people) {

const oldest = people.map(a=>(a.yearOfDeath-a.yearOfBirth)).reduce((a,b)=>{
 if (a<b) return b;
 else return a;
},0);
const ageArray = people.map(a=>(a.yearOfDeath-a.yearOfBirth));
console.log(oldest);
console.log(people.map(a=>(a.yearOfDeath-a.yearOfBirth)));

const index = ageArray.indexOf(oldest);
console.log(people[index]);
return people[index];

};

// Do not edit below this line
module.exports = findTheOldest;
