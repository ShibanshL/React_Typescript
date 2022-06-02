import { stringify } from 'querystring'
import React, { useState,useEffect } from 'react'
import './Display.css'
import Display_Sub from './Display_Sub'
import {api2} from './API2'
// require('dotenv').config()

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
  const [data_R2, setData_R2] = useState<api2>()
  const [name,setName] = useState<string>('')
  let city_name = check
  let t:number|undefined;
  const apiKey = 'da540d286a89bdbd7dec5990f11a2299'
  let nc = 'delhi'
    
    async function fetch_R(){
      let urlc =`https://api.openweathermap.org/data/2.5/weather?q=`+city_name+`&limit=5&appid=e0acb40649748d907810e7cb7e2bb994`
      var res = await fetch(urlc)
      let kdata = await res.json()
      setData_R(kdata)
      setName(kdata.name)
      setFind(true)
    }
    async function fetch_R1(){
        let url = 'http://api.weatherapi.com/v1/current.json?key=e69179dbcaf74929a78121725220206&q='+city_name+'&aqi=no'
        var res = await fetch(url)
        let kdata = await res.json()
        setData_R2(kdata)
        console.log('New api : ',kdata)
    }

    async function fetch_R3(){
      
    }
    useEffect(() => {
        fetch_R()
        fetch_R1()
      },[city_name])
      
      if(find==false){
        return( 
          <>
          <h1>working</h1>
          </>
        )
       
      }
      else{
        return(
          <div className="Display_Main">
              <div className="Main_weather">
                <h1 className='Heading'>{data_R?.name}</h1>
                <h2>{data_R2?.current.temp_c}&deg;C</h2>
                <h3>{data_R2?.current.condition.text}</h3>
                {/* <h2>{t}&deg;C</h2> */}

              </div>
  
              <div className="Sub_weather">
                <div className="Sub_sub">
                  <h2>Clouds : <br></br>{data_R?.clouds.all}%</h2>
                  <h2>Humidity : <br></br>{data_R?.main.humidity}%</h2>
                  <h2>Wind : <br></br>{data_R?.wind.speed} KMPH</h2>
                </div>
              </div>
          </div>
        )
      }
   
      
    
      
    // }
  // }
  
}

export default Display