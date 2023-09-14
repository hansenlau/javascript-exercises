// solution 1 by Hansen
/*
function removeFromArray() {
    let array = arguments[0];
    for (i=1; i < arguments.length; i++){
        let index = array.indexOf(arguments[i]);
        if (index !== -1){
            array.splice(index,1);
        }
    }
    return array;
};
*/

//solution 2
/* function removeFromArray(array, ...args){
    const newArray = [];
    array.forEach((item)=>{
        if (!args.includes(item)){
            newArray.push(item)
        }

    }

    )
    return newArray;
}
*/

function removeFromArray(array,...args){
    return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
