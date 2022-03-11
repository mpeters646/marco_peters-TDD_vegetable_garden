const getYieldForPlant = (plant) => plant.yield;

const getYieldForCrop = (crop) => crop.numCrops * crop.crop.yield;

const getTotalYield = (input) => {
  let result = [];
  input.crops.forEach((crop) => {
    result.push(crop.crop.yield * crop.numCrops);
  });

  return result.reduce((acc, curr) => acc + curr);
};

const getCostsForCrop = (input) => input.crop.cost * input.numCrops;

const getRevenueForCrop = (input) => {
  return getYieldForCrop(input) * input.crop.salesPrice;
};

const getProfitForCrop = (input) => {
  return getYieldForCrop(input) - getCostsForCrop(input);
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
};
