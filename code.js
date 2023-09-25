function binarySearch(list, element) {
    //This is my binary search function, I apologize for taking so long, I'll talk about it more in my Reflection tomorrow
    let start = 0;
    let end = list.length - 1;

    while(start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (list[middle] < element) {
            start = middle + 1;
        }
        if (list[middle] > element) {
            end = middle - 1;
        }
        if (middle == element) {
            return middle;
        }
    }
    return -1;
}
