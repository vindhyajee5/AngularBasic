"use strict";
class LargestElement {
    findLargest(arr) {
        let largest = arr[0] ?? 0;
        for (let i = 1; i < arr.length; i++) {
            const current = arr[i];
            if (current !== undefined && current > largest) {
                largest = current;
            }
        }
        return largest;
    }
}
let task6 = new LargestElement();
let ar = [10, 45, 2, 78, 34];
console.log("Largest number is:", task6.findLargest(ar));
//# sourceMappingURL=LargestElement.js.map