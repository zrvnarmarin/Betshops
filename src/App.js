import { useEffect, useState } from 'react';
import Map from './Components/Map';
import './Styles/App.css';
import useFetchData from './Components/useFetchData';

function App() {
  const {data} = useFetchData('https://interview.superology.dev/betshops?boundingBox=48.16124,11.60912,48.12229,11.52741')
  const [betshopsData, setBetshopsData] = useState(null)
  const [userLocation, setUserLocation] = useState(null)
  
  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      setUserLocation({lng: position.coords.longitude, lat: position.coords.latitude})
    }, (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
              setUserLocation({lng: 11.576124, lat: 48.137154}) 
              break;
          }
    })
    
    setBetshopsData(data)
    }, [data])
    
  return (
    <div className="app">
      {userLocation && betshopsData && <Map betshopData={betshopsData.betshops} coords={userLocation}/>}
    </div>
  );
}

export default App;
