import React,{useState,useEffect} from 'react'
import Display from './Display'
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
    </>
  )
}

export default Sub