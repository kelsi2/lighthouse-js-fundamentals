const smartGarbage = function (trash, bins) {
  let newBins = [];
  let keys = Object.keys(bins);
  let values = Object.values(bins);

  for (let index = 0; index < keys.length; index++) {
    if (keys[index] === trash) {
      values[index] += 1;
    }
  }
  keys.forEach((key, value) => newBins[key] = values[value]);
  return newBins;
};

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });