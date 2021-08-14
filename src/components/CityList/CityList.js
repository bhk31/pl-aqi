import React from 'react';
import styles from './CityList.module.css';
import Loading from '../Loading/Loading';
import CityCard from '../CityCard/CityCard';

function CityList({ cityData, isLoading, handleLoadCityGraph }) {
  let cityList = Object.keys(cityData).map((city) => {
    return (
      <CityCard
        key={city}
        handleLoadCityGraph={handleLoadCityGraph}
        city={city}
        aqi={cityData[city].aqi}
      ></CityCard>
    );
  });

  if (isLoading) {
    return <Loading />;
  } else {
    return <div className={styles.city_container}>{cityList}</div>;
  }
}

export default CityList;
