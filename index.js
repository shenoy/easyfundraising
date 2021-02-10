function add(numbers) {
  let delimiter = ",";
  if (isNaN(parseInt(numbers[0]))) {
    delimiter = numbers[3];
  }
  console.log(` delimiter is ${delimiter}`);
  const data = numbers
    .split(delimiter)
    .filter((x) => !isNaN(x))
    .filter((x) => x <= 1000);
  console.log("data>>>", data);
  try {
    negatives = data.filter((x) => parseInt(x) < 0);
    if (negatives.length) {
      throw negatives + " - negative numbers not allowed";
    }
  } catch (err) {
    console.log(err);
    return err;
  }
  positives = data.filter((x) => parseInt(x) >= 0);
  const sum = data.reduce((a, b) => a * 1 + b * 1, 0);
  console.log("sum of the numbers is: " + sum);
  return sum;
}

module.exports = { add };
