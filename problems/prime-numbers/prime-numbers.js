// https://ru.wikipedia.org/wiki/Решето_Эратосфена

// public void runEratosthenesSieve(int upperBound) {
//     int upperBoundSquareRoot = (int) Math.sqrt(upperBound);
//     boolean[] isComposite = new boolean[upperBound + 1];
//     for (int m = 2; m <= upperBoundSquareRoot; m++) {
//           if (!isComposite[m]) {
//                 System.out.print(m + " ");
//                 for (int k = m * m; k <= upperBound; k += m)
//                       isComposite[k] = true;
//           }
//     }
//     for (int m = upperBoundSquareRoot; m <= upperBound; m++)
//           if (!isComposite[m])
//                 System.out.print(m + " ");
// }

export function primeNumbers(num) {
    const map = new Map();
    const result = [];

    for (let i = 2; i <= num; i++) {
        if (!map.get(i)) {
            result.push(i);
            let j = i;

            while (j <= num) {
                map.set(j, true);
                j += i;
            }
        }
    }

    return result;
}
