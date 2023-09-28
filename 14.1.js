function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, current) => (current % 2 === 0 ? sum + current : sum), 0);
}
function calculateAverage(arr) {
    const sum = arr.reduce((total, current) => total + current, 0);
    return sum / arr.length;
}
function findMax(arr) {
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
  }
  const numbers = [4, 9, 2, 7, 5];
  const maxNumber = findMax(numbers);
  console.log("Max Number:", maxNumber);
  const evenSum = sumOfEvenNumbers(numbers);
console.log("Sum of Even Numbers:", evenSum);
const average = calculateAverage(numbers);
console.log("Average:", average);