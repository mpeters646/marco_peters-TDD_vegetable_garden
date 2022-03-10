const getYieldForPlant = (plant) => plant.yield;

const getYieldForCrop = (crop) => crop.numCrops * crop.crop.yield;

const getTotalYield = (input) => {
  let result = [];
  input.crops.forEach((crop) => {
    result.push(crop.crop.yield * crop.numCrops);
  });

  const totalYields = result.reduce((acc, curr) => {
    return acc + curr;
  });

  return totalYields;
};

const getCostsForCrop = (input) => input.crop.cost * input.numCrops;

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
};
