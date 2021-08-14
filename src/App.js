import './App.css';
import CityList from './components/CityList/CityList';
import BarGraph from './components/BarGraph/BarGraph';
import { useEffect, useState } from 'react';
import socket from './data/socket';
import { formatData } from './utils/utils';
import Loading from './components/Loading/Loading';

function App() {
  const [barGraphView, setBarGraphView] = useState(false);
  const [cityData, setCityData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const updateCityData = (currentData) => {
      setCityData((prevData) => formatData(prevData, currentData));
      setIsLoading(false);
    };

    socket.onmessage = function (event) {
      updateCityData(JSON.parse(event.data));
    };

    socket.onerror = () => {
      setIsLoading(true);
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleSetBarGraph = (city = null) => {
    setSelectedCity(city);
    setBarGraphView(!barGraphView);
  };

  const btnText = barGraphView ? 'Guage Graph' : 'Bar Graph';

  return (
    <div className='App'>
      <h1>Air Quality Index</h1>
      <button className='btn' onClick={() => handleSetBarGraph()}>
        {btnText}
      </button>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='container'>
          {barGraphView ? (
            <BarGraph cityData={cityData} selectedCity={selectedCity} />
          ) : (
            <CityList
              cityData={cityData}
              isLoading={isLoading}
              handleLoadCityGraph={handleSetBarGraph}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
