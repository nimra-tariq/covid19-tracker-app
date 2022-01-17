import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import './dropDown.css'
import { useContext } from 'react'
import { MyContext } from '../../context/context'

export default function DropDown(){

  const myContext=useContext(MyContext);

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
      console.log(value.label);
      myContext.dispatchFun({action:value.label,type:"getCountryName"})
    }
    return(
        <div className="d-flex justify-content-center boxx">
       <Select options={options} value={value} onChange={changeHandler} />
       </div>
    );
}