export const generateRandomPrice = () => {
  var minPrice = 3000;
  var maxPrice = 15000;

  var randomPrice =
    Math.floor((Math.random() * (maxPrice - minPrice + 1) + minPrice) / 100) *
    100;

  return randomPrice;
};
