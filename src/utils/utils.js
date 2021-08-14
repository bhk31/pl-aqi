const getAqiCategory = (aqi) => {
  const aqiCategory = [
    { color: '#009900', category: 'Good' },
    { color: '#ccff66', category: 'Satisfactory' },
    { color: '#ffff00', category: 'Moderate' },
    { color: '#ff7e00', category: 'Poor' },
    { color: '#ff0000', category: 'Very Poor' },
    { color: '#7e0023', category: 'Severe' },
  ];

  if (aqi >= 0 && aqi <= 50) {
    return aqiCategory[0];
  }

  if (aqi >= 51 && aqi <= 100) {
    return aqiCategory[1];
  }

  if (aqi >= 101 && aqi <= 200) {
    return aqiCategory[2];
  }

  if (aqi >= 201 && aqi <= 300) {
    return aqiCategory[3];
  }

  if (aqi >= 301 && aqi <= 400) {
    return aqiCategory[4];
  }

  if (aqi >= 401 && aqi <= 500) {
    return aqiCategory[5];
  }

  return aqiCategory[0];
};

const formatData = (prevData, currentData) => {
  let tempData = {};

  currentData.forEach((city) => {
    console.log(city);
    let oldTime = new Date();
    if (prevData[city.city]) {
      oldTime = prevData[city.city].timeDiff;
    }

    tempData[city.city] = {
      aqi: city.aqi.toFixed(2),
      timeDiff: Math.abs(new Date() - oldTime) / 1000,
    };
  });

  return { ...prevData, ...tempData };
};

export { getAqiCategory, formatData };
