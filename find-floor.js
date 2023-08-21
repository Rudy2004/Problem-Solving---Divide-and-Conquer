function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;  // Default value if floor doesn't exist

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) {
            return arr[mid];  // Found an exact match
        } else if (arr[mid] < x) {
            floor = arr[mid];  // Update floor and search to the right
            left = mid + 1;
        } else {
            right = mid - 1;  // Search to the left
        }
    }

    return floor;
}

module.exports = findFloor