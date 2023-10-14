const findTheOldest = function(people) {

const d = new Date();
let year = d.getFullYear();
    
const ageArr = people.map(a=>{
    if(isNaN(a.yearOfDeath)) return (year - a.yearOfBirth);
    else return (a.yearOfDeath-a.yearOfBirth);
    });
    
const oldest =  ageArr.reduce((a,b)=>{
    if (a<b) return b;
    else return a;
    },0);

const index = ageArr.indexOf(oldest);

return people[index];


};

// Do not edit below this line
module.exports = findTheOldest;
