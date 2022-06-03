import { stringify } from 'querystring'
import React, { useState,useEffect } from 'react'
import './Display.css'
import Display_Sub from './Display_Sub'
import {api2} from './API2'
import {api3} from './API3'
import Card from './Card'
// require('dotenv').config()

// console.log(process.env)
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
  weather: [{id:number, main: string, description: string, icon: string}]
  wind: {speed:number, deg: number, gust: number}
}

interface PropsN {
  check:string
}


function Display ({check}:PropsN) {
 
  const [find, setFind] = useState<Boolean>(false)
  const [data_R, setData_R] = useState<api>()
  const [data_R2, setData_R2] = useState<api2>()
  const [data_R3, setData_R3] = useState<api3>()

  const [name,setName] = useState<string>('')
  let city_name = check
  let t:number|undefined;
  const apiKey = 'da540d286a89bdbd7dec5990f11a2299'
  let nc = 'delhi'
    
    async function fetch_R(){
      try{
        let urlc =`https://api.openweathermap.org/data/2.5/weather?q=`+city_name+`&limit=5&appid=e0acb40649748d907810e7cb7e2bb994`
        var res = await fetch(urlc)
        let kdata = await res.json()
        console.log('fetch_R',kdata)
        setData_R(kdata)
        setName(kdata.name)
        setFind(true)
      }
      catch(e){
        console.log(e)
      }
      
    }
    async function fetch_R1(){

      try {
        let url = 'http://api.weatherapi.com/v1/current.json?key=e69179dbcaf74929a78121725220206&q='+city_name+'&aqi=no'
        var res = await fetch(url)
        let kdata = await res.json()
        console.log('fetch_R1',kdata)
        setData_R2(kdata)
        // console.log('New api : ',kdata)
      } 
      catch (e) {
        console.log(e)
      }
        
    }

    async function fetch_R3(){

      try {
        let url = 'http://api.weatherapi.com/v1/forecast.json?key=e69179dbcaf74929a78121725220206&q='+city_name+'&days=10&aqi=no&alerts=no'
        var res = await fetch(url)
        let kdata = await res.json()
        console.log('fetch_R3',kdata)
        setData_R2(kdata)
        console.log('New api : ',kdata)
        setData_R3(kdata)
        console.log('pls',data_R3)
      } 
      catch (e) {
        console.log(e)
      }

      

    }
    useEffect(() => {
        fetch_R()
        fetch_R1()
        setTimeout(
          fetch_R3
        ,
        2000)
        
        // fetch_R3()
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
          <>
            {/* <div className="Display_Main">
                <div className="Main_weather">
                  <h1 className='Heading'>{data_R?.name}</h1>
                  <h2>{data_R2?.current.temp_c}&deg;C</h2>
                  <h3>{data_R2?.current.condition.text}</h3>
                </div>
    
                <div className="Sub_weather">
                  <div className="Sub_sub">
                    <h2>Clouds : <br></br>{data_R?.clouds.all}%</h2>
                    <h2>Humidity : <br></br>{data_R?.main.humidity}%</h2>
                    <h2>Wind : <br></br>{data_R?.wind.speed} KMPH</h2>
                  </div>
                </div>
            </div> */}

            {/* <div className="test">{data_R3?.forecast.forecastday.map(e =>{ 
                if(e.avghumidity == undefined){
                  return( <h2 key={e.avgtemp_c}>{e.avgtemp_f}</h2>)
                }
                else {
                  return <h2 key={e.avgtemp_c}>{e.avgtemp_c}</h2>
                }
            })}</div> */}
            {/* {console.log(data_R3?.forecast.forecastday)} */}
            {/* {console.log('inside return',data_R)} */}
            
            {/* <div className="test">{data_R3?.forecast.forecastday.map(e => {return( 
              <>
                <div className="Card">
                    <h2 key={e.day.avgtemp_c}>{e.day.avgtemp_c}&deg;C</h2>
                    <h2 key={e.day.condition.text}>{e.day.condition.text}</h2>
                    <h3 key={e.date}>{e.date}</h3>
                    <img src={e.day.condition.icon} alt="err" />

                </div>
              </>
             )})}</div> */}

             <div className="Display_Main">
               <div className="Part_One">
                 <div className="Top_text">
                   <h1>{data_R2?.location.name}</h1>
                   <h2 className='Country'>{data_R2?.location.country}</h2>
                   <h2>{data_R3?.forecast.forecastday[0].date}</h2>
                 </div>
                 <div className="Bottom_text">
                   <div className="Img">
                     <img src={data_R3?.forecast.forecastday[0].day.condition.icon} alt="" />
                   </div>
                   <h2>{data_R3?.forecast.forecastday[0].day.condition.text}</h2>
                 </div>
               </div>
               <div className="Part_Two">
                 <div className="Top_temp">
                   <h1>{data_R2?.current.temp_c}°</h1>
                   <h2>{data_R2?.current.temp_f}°F</h2>
                 </div>
                 <div className="Cards">
                    <div className="Card_Sub">{data_R3?.forecast.forecastday.map(e => {return( 
                      <>
                        <div className="Card_Sub_Sub">
                            <h2 key={e.day.avgtemp_c}>{e.day.avgtemp_c}&deg;C</h2>
                            <h2 key={e.day.condition.text}>{e.day.condition.text}</h2>
                            <h3 key={e.date}>{e.date}</h3>
                            <img src={e.day.condition.icon} alt="err" />

                        </div>
                      </>
                )})}</div>
                 </div>
               </div>
             </div>



          </>
        )
      }
   
      
    
      
    // }
  // }
  
}

export default Display