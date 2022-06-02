import React, { useEffect, useState } from 'react'

interface props {
    data:string
}
function Display_Sub(data:props) {
   const [cdata,setCdata]=useState<string>('')
   useEffect(()=>
   {
        // setCdata(data)
        console.log('Data in side new display',data)
   },[data])


  return (
    <div>Display_Sub</div>
  )
}

export default Display_Sub