// https://ru.wikipedia.org/wiki/Сортировка_слиянием

export function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.round(arr.length / 2);
    const left = mergeSort(arr.splice(0, middle));
    const right = mergeSort(arr);

    const result = [];
    while (left.length !== 0 && right.length !== 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left).concat(right);
}
