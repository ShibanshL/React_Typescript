import React,{useState,useEffect} from 'react'
import Display from './Display'
import Display_Sub from './Display_Sub'
import Input from './Input'
import './sub.css'

function Sub() {
    const [data,setData] = useState<string>('')
    const [check, setCheck] = useState<string>('delhi')
    // check=='delhi'
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
       
    
        if(data)
        {
            setCheck(data)
            setData('')
        }
        else{
            console.log('no')
        }
        


      
    }
    if(check.length==0)
    {
        return (
            <>
            <div className="Main">
              <div className="Main_sub">
                  <div className="Input">
                      <Input data={data} setData={setData} handleSubmit={handleSubmit}/>
                  </div>
                  <div className="Display">
                      <Display_Sub />
                  </div>
              </div>
            </div>
            </>
          )
    } 
    else{
        return (
            <>
            <div className="Main">
              <div className="Main_sub">
                  <div className="Input">
                      <Input data={data} setData={setData} handleSubmit={handleSubmit}/>
                  </div>
                  <div className="Display">
                      <Display check={check}/>
                  </div>
              </div>
            </div>

            <div className="Pseudo_ele"></div>
            </>
          )
    }
//   return (
//     <>
//     <div className="Main">
//       <div className="Main_sub">
//           <div className="Input">
//               <Input data={data} setData={setData} handleSubmit={handleSubmit}/>
//           </div>
//           <div className="Display">
//               {check}
//               <Display check={check}/>
//           </div>
//       </div>
//     </div>
//     </>
//   )
}

export default Sub