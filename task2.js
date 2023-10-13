function filterNumbers(arr, callback) {
  const filteredArray = arr.filter((num) => num % 2 === 0);
  callback(filteredArray);
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filterNumbers(arr2, (result) => {
  console.log(result);
});
