import React from 'react';
import styles from './CityCard.module.css';
import GaugeChart from 'react-gauge-chart';
import { getAqiCategory } from '../../utils/utils';

function CityCard({ aqi, city, handleLoadCityGraph }) {
  const aqiCategory = getAqiCategory(aqi);

  return (
    <div
      className={styles.city_card_container}
      onClick={() => handleLoadCityGraph(city)}
    >
      <GaugeChart
        percent={aqi / 500}
        textColor='#000'
        arcsLength={[0.1, 0.1, 0.2, 0.2, 0.2, 0.2]}
        id={'gauge-' + city}
        arcPadding={0.03}
        colors={[
          '#009900',
          '#ccff66',
          '#ffff00',
          '#ff7e00',
          '#ff0000',
          '#7e0023',
        ]}
        nrOfLevels={6}
        formatTextValue={() => {
          return city;
        }}
      />
      <p className={styles.aqi} style={{ color: aqiCategory.color }}>
        {aqi}
      </p>
      <p className={styles.category}>{aqiCategory.category}</p>
    </div>
  );
}

export default CityCard;
