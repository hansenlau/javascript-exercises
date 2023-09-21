const palindromes = function (input) {
    let punc = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    let whiteSpace = (/\s/g, '')
    let initWord = input.replace(/\s/g, '').replace(punc,'').toLowerCase();
    let finWord = input.replace(punc,"").replace(/\s/g, '').toLowerCase().split('').reverse().join('');
    console.log(typeof(input));
    console.log(initWord);
    console.log(finWord);
    if (initWord == finWord) return true;
    else return false;

};

// Do not edit below this line
module.exports = palindromes;
