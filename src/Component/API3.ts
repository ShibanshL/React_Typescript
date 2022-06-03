export interface api3{
    current:{}
    forecast:{
        forecastday:[{
            // astro:{},
            date:string,
            day:{
                avghumidity: number
                avgtemp_c: number
                avgtemp_f: number
                avgvis_km: number
                avgvis_miles: number
                condition:
                {                    
                    code: number
                    icon: string
                    text: string
                }
            }}
        ]
    }
    location:{
        
    }
}