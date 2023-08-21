// https://en.wikipedia.org/wiki/Binary_search_algorithm

export function binarySearch(arr, value) {
    let min = 0;
    let max = arr.length - 1;
    let middle = Math.round((min + max) / 2);
    while (min <= max) {
        if (value < arr[middle]) {
            max = middle - 1;
        } else if (value > arr[middle]) {
            min = middle + 1;
        } else {
            return middle;
        }
        middle = Math.round((min + max) / 2);
    }
    return undefined;
}
