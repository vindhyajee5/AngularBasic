class PrimeNumber
{
    checkPrime(num: number): boolean {

        // 0, 1 and negative numbers are not prime
        if (num <= 1) {
            return false;
        }

        // Check divisibility
        for (let i = 2; i <= Math.sqrt(num); i++) {

            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }
}

let task9 = new PrimeNumber();

console.log(task9.checkPrime(7));
console.log(task9.checkPrime(10));
console.log(task9.checkPrime(13));
console.log(task9.checkPrime(1));