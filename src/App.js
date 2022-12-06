import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'; 
import WeatherCard from './components/WeatherCard'; 
import Forecast from './components/Forecast';

const URL = `https://api.openweathermap.org/data/2.5/weather`
const URL2 = `https://api.openweathermap.org/data/2.5/forecast`
const API_KEY = `dd5380e508f540aaaed44edde1e3304b`


function App() {
  // This is a useState Function; This is how it is used; lookup info on site 
  const [latitude, setLatitude] = useState(null); 
  const [longitude, setLongitude] = useState(null); 
  const [city, setCity] = useState(''); 
  const [temperature, setTemperature] = useState(null); 
  const [humidity, setHumidity] = useState(null); 
  const [sunrise, setSunrise] = useState(null); 
  const [sunset, setSunset] = useState(null); 
  const [icon, setIcon] = useState(''); 
  const [forcast, setForcast] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      setLatitude(position.coords.latitude); 
      setLongitude(position.coords.longitude); 
    });

    axios.get(`${URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`)
    .then((weatherData) => {
      console.log(weatherData.data);
      setTemperature(weatherData.data.main.temp);
      setSunset(weatherData.data.sys.sunset); 
      setSunrise(weatherData.data.sys.sunrise); 
      setHumidity(weatherData.data.main.humidity); 
      setCity(weatherData.data.name); 
      setIcon(weatherData.data.weather[0].main); 
      //setForcast(weatherData.data.daily); 
      
    })

    axios.get(`${URL2}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&cnt=8&units=imperial`)
    .then((weatherData2) => {
      console.log(weatherData2.data);
      setForcast(weatherData2.data.list); 
      
    })
  }, [latitude, longitude])
  
  return (
    <div className="main">
      <Header/>
      <WeatherCard 
        temperature={temperature}
        humidity={humidity}
        sunrise={sunrise}
        sunset={sunset}
        city={city}
        icon={icon}
        />
        <Forecast forcast={forcast}/>
    </div>
  );
}

export default App;
