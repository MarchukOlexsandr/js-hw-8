function getLongestName(names, callback) {
  const longestName = names.reduce((a, b) => (a.length > b.length ? a : b));
  callback(longestName);
}

const arr4 = ["Андрій", "Олександр", "Максим", "Юлія", "Наталія"];
getLongestName(arr4, (result) => {
  console.log(result);
});
