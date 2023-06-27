export const generateRandomPrice = () => {
  var minPrice = 3000;
  var maxPrice = 15000;

  var randomPrice =
    Math.floor((Math.random() * (maxPrice - minPrice + 1) + minPrice) / 100) *
    100;

  return randomPrice;
};

export const findWithAttr = (array, attr, value) => {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
};
