function reverseString(text) {
    arrayText = text.split("");
    revText = arrayText.reverse();
    revText = revText.toString();
    revText = revText.replace(/,/g,"");
    return revText;
};

// Do not edit below this line
module.exports = reverseString;
