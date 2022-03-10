const getYieldForPlant = (plant) => plant.yield;

const getYieldForCrop = (input) => {
  return input.numCrops * input.crop.yield;
};

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

module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield };
