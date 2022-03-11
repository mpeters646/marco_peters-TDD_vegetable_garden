const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require('./farm');

describe('getYieldForPlant', () => {
  const corn = {
    name: 'corn',
    yield: 30,
  };

  test('Get yield for plant with no environment factors', () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe('getYieldForCrop', () => {
  test('Get yield for crop, simple', () => {
    const corn = {
      name: 'corn',
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe('getTotalYield', () => {
  test('Calculate total yield with multiple crops', () => {
    const corn = {
      name: 'corn',
      yield: 3,
    };
    const pumpkin = {
      name: 'pumpkin',
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test('Calculate total yield with 0 amount', () => {
    const corn = {
      name: 'corn',
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

describe('getCostsForCrop', () => {
  test('Calculate the cost for a crop corn', () => {
    const corn = {
      name: 'corn',
      cost: 1,
    };
    const input = {
      crop: corn,
      numCrops: 15,
    };

    expect(getCostsForCrop(input)).toBe(15);
  });

  test('Calculate the cost for a crop pumpkin', () => {
    const pumpkin = {
      name: 'pumpkin',
      cost: 1.5,
    };
    const input = {
      crop: pumpkin,
      numCrops: 15,
    };

    expect(getCostsForCrop(input)).toBe(22.5);
  });
});

describe('getRevenueForCrop', () => {
  test('Calculate the revenue for a crop corn (without environmental factors)', () => {
    const corn = {
      name: 'corn',
      yield: 3,
      salesPrice: 3,
    };
    const input = {
      crop: corn,
      numCrops: 15,
    };

    expect(getRevenueForCrop(input)).toBe(135);
  });

  test('Calculate the revenue for a crop pumpkin (without environmental factors)', () => {
    const pumpkin = {
      name: 'pumpkin',
      yield: 5,
      salesPrice: 2.5,
    };
    const input = {
      crop: pumpkin,
      numCrops: 15,
    };

    expect(getRevenueForCrop(input)).toBe(187.5);
  });
});

describe('getProfitForCrop', () => {
  test('Calculate the profit for a crop corn (without environmental factors)', () => {
    const corn = {
      name: 'corn',
      yield: 3,
      salesPrice: 3,
      cost: 1,
    };
    const input = {
      crop: corn,
      numCrops: 15,
    };

    expect(getProfitForCrop(input)).toBe(30);
  });

  test('Calculate the profit for a crop pumpkin (without environmental factors)', () => {
    const pumpkin = {
      name: 'pumpkin',
      yield: 4,
      salesPrice: 2.5,
      cost: 1,
    };
    const input = {
      crop: pumpkin,
      numCrops: 20,
    };

    expect(getProfitForCrop(input)).toBe(60);
  });
});

describe('getTotalProfit', () => {
  test('Calculate the profit for multiple crops (without environmental factors)', () => {
    const corn = {
      name: 'corn',
      yield: 3,
      salesPrice: 3,
      cost: 1,
    };
    const pumpkin = {
      name: 'pumpkin',
      yield: 4,
      salesPrice: 2.5,
      cost: 1,
    };
    const broccoli = {
      name: 'broccoli',
      yield: 6,
      salesPrice: 3,
      cost: 1,
    };
    const input = [
      { crop: corn, numCrops: 15 },
      { crop: pumpkin, numCrops: 20 },
      { crop: broccoli, numCrops: 10 },
    ];

    expect(getTotalProfit({ input })).toBe(140);
  });
});
