const fibonacci = function(input) {
    let fibbo = [1, 1];
    let index= Number(input)-1;
    if (input<=0) return "OOPS";
    for (let i = 2; i <= index; i++){
        fibbo.push(fibbo[i-1]+fibbo[i-2]);
        console.log(fibbo);
    }
    return fibbo[index];
    };

// Do not edit below this line
module.exports = fibonacci;
