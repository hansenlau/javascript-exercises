const leapYears = function(year) {
    const year400 = year%400 == 0;
    const year4 = year%4 == 0;
    const year100 = year % 100 == 0;

if (year400) return true;
else if (year100) return false;
else if (year4) return true;
return false;
            

    };




// Do not edit below this line
module.exports = leapYears;
