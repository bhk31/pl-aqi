const getLabels = (selectedCity, cityData) => {
  return selectedCity ? [selectedCity] : Object.keys(cityData);
};

const getBarGraphDataSet = (selectedCity, cityData) => {
  const barGraphData = [];
  Object.keys(cityData).map((city) => {
    console.log(`The AQI of the ${city} is ${cityData[city].aqi} `);
    if (city === selectedCity) {
      return barGraphData.push(cityData[city].aqi);
    } else {
      return barGraphData.push(cityData[city].aqi);
    }
  });

  return barGraphData;
};

const getBarGraphData = (selectedCity, cityData) => {
  const labels = getLabels(selectedCity, cityData);
  const barGraphData = getBarGraphDataSet(selectedCity, cityData);

  return {
    labels: labels,
    datasets: [
      {
        label: 'City Wise AQI Comparison',
        data: barGraphData,
        backgroundColor: ['bisque'],
        borderColor: ['#000'],
        borderWidth: 1,
      },
    ],
  };
};

export { getLabels, getBarGraphDataSet, getBarGraphData };
