function filterByChar(arr, char, callback) {
  const filteredArray = arr.filter((str) => str.includes(char));
  callback(filteredArray);
}

const arr3 = ["hello", "world", "javascript", "callback"];
filterByChar(arr3, "a", (result) => {
  console.log(result);
});
