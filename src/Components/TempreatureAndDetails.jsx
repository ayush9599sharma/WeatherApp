import React from 'react'
import { UilTemperature , UilWind ,  UilTear ,UilSun ,UilSunset} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService'

function TempreatureAndDetails({weather:{
    details, icon,temp, temp_min,temp_max,sunrise, sunset, speed, humidity, feels_like, timezone
}}) {
  return (
    <div>


        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>{details}</p>
        </div>


        <div className="flex flex-row items-center justify-between text-white py-3">

            <img src={iconUrlFromCode(icon)} alt="" className='w-20' />
            <p className="text-5xl">{`${temp}°`}</p>

            <div className="flex flex-col space-y-2">

                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1"/> Real fell: 
                    <span className='font-medium ml-1'>{`${feels_like}°`}</span>
                </div>

                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1"/> Humidity: 
                    <span className='font-medium ml-1'>{`${humidity}%`}</span>
                </div>

                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1"/> Wind: 
                    <span className='font-medium ml-1'>{`${speed}Km/hr`}</span>
                </div>   
            </div>

        </div>
        <div className='flex fex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <p className='font-light'>Rise: <span className='font-mediun ml-1'>{formatToLocalTime(sunrise,timezone,"hh:mm a")}</span></p>
            <p className='font-light'>|</p>
            <UilSunset/>
            <p className='font-light'>Set: <span className='font-mediun ml-1'>{formatToLocalTime(sunset,timezone,"hh:mm a")}</span></p>
            <p className='font-light'>|</p>
            <UilSun/>
            <p className='font-light'>High: <span className='font-mediun ml-1'>{`${temp_max}°`}</span></p>
            <p className='font-light'>|</p>
            <UilSun/>
            <p className='font-light'>Low: <span className='font-mediun ml-1'>{`${temp_min}°`}</span></p>
            


        </div>
    </div>
  )
}

export default TempreatureAndDetails
