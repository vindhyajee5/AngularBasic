"use strict";
class Frequency {
    countOccurrences(input) {
        let hashmap = new Map();
        for (let i = 0; i < input.length; i++) {
            let char = input[i];
            if (char !== undefined) {
                if (hashmap.has(char)) {
                    hashmap.set(char, hashmap.get(char) + 1);
                }
                else {
                    hashmap.set(char, 1);
                }
            }
        }
        return hashmap;
    }
}
let task10 = new Frequency();
let result = task10.countOccurrences("aabbbc");
// Step 7: Print HashMap
result.forEach((value, key) => {
    console.log(key + " : " + value);
});
//# sourceMappingURL=Frequency.js.map