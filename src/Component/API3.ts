export interface api3{
    current:{}
    forcast:{
        forecastday:[
            day:{
                avghumidity: number
                avgtemp_c: number
                avgtemp_f: number
                avgvis_km: number
                avgvis_miles: number
            }
        ]
    }
    location:{
        
    }
}