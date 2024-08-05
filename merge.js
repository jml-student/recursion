function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    const leftSort = mergeSort(left);
    const rightSort = mergeSort(right);

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftSort.length && rightIndex < rightSort.length) {
        if (leftSort[leftIndex] < rightSort[rightIndex]) {
            result.push(leftSort[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightSort[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < leftSort.length) {
        result.push(leftSort[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightSort.length) {
        result.push(rightSort[rightIndex]);
        rightIndex++;
    }

    return result;
}

console.log(mergeSort([79, 250, 40, 101]));
