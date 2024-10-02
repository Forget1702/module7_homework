function uniqueSortedArray(numbers) {
    const uniqueNumbers = new Set(numbers);
    return Array.from(uniqueNumbers).sort((a, b) => a - b);
}
const num = [1, 0, 2, 2, 3, 3, -1, -2, -3];
console.log(uniqueSortedArray(num));