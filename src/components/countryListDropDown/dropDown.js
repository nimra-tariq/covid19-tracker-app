import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import './dropDown.css'

export default function DropDown(){
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }
    return(
        <div className="d-flex justify-content-center boxx">
       <Select options={options} value={value} onChange={changeHandler} />
       </div>
    );
}