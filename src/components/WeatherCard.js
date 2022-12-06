import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCloud, faCloudRain, faSmog, faSnowman, faSun } from '@fortawesome/free-solid-svg-icons'


export default function WeatherCard(
    { temperature, city, sunrise, sunset, humidity, icon }) {
    let weatherIcons = null; 

    if (icon === 'Haze') {
        weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" color="#212121" />
      }
      else if (icon === 'Thunderstorm') {
        weatherIcons = <FontAwesomeIcon icon={faBolt} size="lg" color="#212121" />
      }
      else if (icon === 'Drizzle') {
        weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#212121" />
      }
      else if (icon === 'Rain') {
        weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#212121" />
      }
      else if (icon === 'Snow') {
        weatherIcons = <FontAwesomeIcon icon={faSnowman} size="lg" color="#212121" />
      }
      else if (icon === 'Mist') {
        weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" color="#212121" />
      }
      else if (icon === 'Clear') {
        weatherIcons = <FontAwesomeIcon icon={faSun} size="lg" color="#212121" />
      }
      else if (icon === 'Clouds') {
        weatherIcons = <FontAwesomeIcon icon={faCloud} size="lg" color="#212121" />
      }
      return (
        <Card>
            <Card.Content className="weather-card">
            <Card.Header className="weather-card-child">{city}</Card.Header>
            <div className="icon-container">
                {weatherIcons}
            </div>
            </Card.Content>
            <Card.Content>
            <Feed>
                <Feed.Event>
                <Feed.Content>
                    <h5 className="weather-card-child">{moment().format('MMMM Do YYYY, h:mm a')}</h5>
                    <div className="weather-card">
                        <div className="weather-card-child">
                            {Math.floor(temperature)} ℉
                        </div>
                        <div className="weather-card-child">
                            {humidity} % Humidity
                        </div>
                    </div>
                    <div className="weather-card">
                        <div className="weather-card-child">
                            {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
                        </div>
                        <div className="weather-card-child">
                            {new Date(sunset * 1000).toLocaleTimeString('en-IN')}
                        </div>
                    </div>
                </Feed.Content>
                </Feed.Event>
            </Feed>
            </Card.Content>
        </Card>
        )
}