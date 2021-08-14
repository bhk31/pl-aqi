import React from 'react';
import { Bar } from 'react-chartjs-2';
import { getBarGraphData } from './../../utils/barGraphUtils';

function BarGraph({ cityData, selectedCity }) {
  const data = getBarGraphData(selectedCity, cityData);

  return (
    <>
      <p></p>
      <Bar
        width={500}
        height={500}
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title: { text: 'AQI Monitoring', display: true },
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </>
  );
}

export default BarGraph;
