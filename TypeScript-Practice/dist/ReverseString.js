"use strict";
class ReverseString {
    reverseString(input) {
        return input.split("").reverse().join("");
    }
    checkPalindrome(input) {
        let reverseString = input.split("").reverse().join("");
        if (input === reverseString) {
            return true;
        }
        else {
            return false;
        }
    }
}
let result2 = new ReverseString();
console.log(result2.reverseString("hello"));
console.log(result2.checkPalindrome("madam"));
//# sourceMappingURL=ReverseString.js.map