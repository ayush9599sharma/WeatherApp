
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import TempreatureAndDetails from './Components/TempreatureAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import {useState} from 'react'
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({q:"london"})
  const [units, setUnits] = useState('metric')
  const [weather,setWeather] = useState(null)
  
  useEffect(()=>{
    const fetchWeather  = async() =>{
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);
      await getFormattedWeatherData({...query,units}).then((data)=>{
        setWeather(data)
      })
      
    }
    fetchWeather();
  },[query,units])

 
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700  to-blue-700 h-fit shadow-xl shadow-gray-400">
     <TopButtons setQuery={setQuery}/>
     <Inputs setQuery={setQuery}  units={units} setUnits={setUnits}/>
     {console.log(weather)}
     {weather &&  (<div>
      <TimeAndLocation weather={weather}/>
     <TempreatureAndDetails weather={weather}/>
     <Forecast title="Hourly Forecase" items={weather.hourly}/>
     <Forecast title="Daily Forecast" items={weather.daily}/>
     </div>)}
     
     <ToastContainer autoClose={5000} theme="colored" newestOnTop={true}/>
    </div>
    
  );
}

export default App;
