export const generateRandomPrice = (id) => {
  const min = 2500;
  const max = 18000;
  const range = Math.floor((max - min) / 50) + 1;

  // Use the id parameter to seed the random number generator
  const seededRandom = Math.abs(Math.sin(id));

  // Generate a random number within the range
  const randomNumber = Math.floor(seededRandom * range) * 50 + min;

  return randomNumber;
};

export const findWithAttr = (array, attr, value) => {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
};
