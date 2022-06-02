import { stringify } from 'querystring'
import React, { useState,useEffect } from 'react'
import './Display.css'
import Display_Sub from './Display_Sub'
require('dotenv').config()

interface api {
  base: string
  clouds: {all: number}
  cod: number
  coord: {lon: number, lat: number}
  dt: number
  id: number
  main: {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_max: number
    temp_min: Number}
  name: string
  sys: {type: number, id: number, country: string, sunrise: number, sunset: number}
  timezone: number
  visibility: number
  weather: [id:number, main: string, description: string, icon: string]
  wind: {speed:number, deg: number, gust: number}
}

interface PropsN {
  check:string
}
let data:string = ''

function Display ({check}:PropsN) {
 
  const [find, setFind] = useState<Boolean>(false)
  const [data_R, setData_R] = useState<api>()
  const [name,setName] = useState<string>('')
  let city_name = check
  const apiKey = process.env.API_KEY
  let nc = 'delhi'
    
    async function fetch_R(){
      var url = `https://api.openweathermap.org/data/2.5/weather?q=`+city_name+`&limit=5&appid=`+apiKey+``
      var res = await fetch(url)
      let kdata = await res.json()
      
      // console.log('AF= ',kdata)
      // console.log(kdata.main.temp)
      // console.log('name = ',kdata.name)
      setFind(true)
      
      setData_R(kdata)
      setName(kdata.name)
      setFind(false)

      // console.log('AFF',data_R)
      // console.log('hjjh',data_R?.main.pressure)

    }
    useEffect(() => {
      console.log('p =',city_name)
       
        fetch_R()
  
      console.log('L =',city_name)
      console.log('KL',data)
        
  
      },[city_name])
      
   
     
      return( 
        <>
        <div className="Display_Main">
            <div className="Main_weather">
              <h1 className='Heading'>{data_R?.name}</h1>
              <h2>{data_R?.main.temp}&deg;</h2>
            </div>

            <div className="Sub_weather">
              <div className="Sub_sub">
                <h2>Clouds : <br></br>{data_R?.clouds.all}%</h2>
                <h2>Humidity : <br></br>{data_R?.main.humidity}%</h2>
                <h2>Wind : <br></br>{data_R?.wind.speed} KMPH</h2>
              </div>
            </div>
        </div>
        
        
        </>
      )
    // }
  
}

export default Display