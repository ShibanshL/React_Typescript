import React from 'react'
import './sub.css'

interface props  {
    data:string
    setData:React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent) => void
}

function Input({data, setData, handleSubmit}:props) {
  return (
    <form onSubmit={e => handleSubmit(e)}>
    <label>Your City : </label>
    <input 
    type='text' 
    placeholder='Name of the City'
    value={data}
    onChange={(e)=>{setData(e.target.value)}} />
    {/* <button>GO</button> */}
</form>
  )
}

export default Input