const generateNumbers = amountOfNumbers => {
  const generatedNumbers = [];
  let counter = amountOfNumbers;
  while (counter > 0) {
    generatedNumbers.push(Math.random([5, 20]));
    counter = counter - 1;
  }
  return generatedNumbers;
};

const displayNumbers = arrayOfNumbers => console.log(arrayOfNumbers);

displayNumbers(generateNumbers(10));
