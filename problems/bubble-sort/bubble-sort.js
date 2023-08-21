// https://sortvisualizer.com/bubblesort/
// https://en.wikipedia.org/wiki/Bubble_sort

// time: O(n^2)
// space: O(1)
export function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            }
        }
    }
    return arr;
}
