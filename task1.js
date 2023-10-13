function filterByWord(arr, word, callback) {
  const filteredArray = arr.filter((str) => str.includes(word));
  callback(filteredArray);
}

const arr1 = ["Hello World", "Goodbye", "JavaScript", "World of Warcraft"];
filterByWord(arr1, "World", (result) => {
  console.log(result);
});
