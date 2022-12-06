import React from 'react'; 
import { Card } from 'semantic-ui-react'; 

export default function Forecast({forcast}) {
  return (
    <div>
        <Card.Group itemsPerRow={4}>
            {forcast.map((data) => {
                return(
                    <Card>
                        <Card.Content>
                            <Card.Header>{Math.floor(data.main.temp)} ℉</Card.Header>
                            <Card.Meta>{data.main.humidity} % Humidity</Card.Meta>
                            <Card.Description className='temp-desc'>
                                {data.weather[0].description}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )
            })}
        </Card.Group>
    </div>
  )
}
