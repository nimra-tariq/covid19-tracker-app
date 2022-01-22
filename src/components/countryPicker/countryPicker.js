import { useEffect,useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core"
import {fetchCountries} from '../covidRatioChart/fetchApi'


export default function CountryPicker() {
    const [countryList,setCountryList]=useState([]);
    useEffect(()=>{
   async function fetchData(){
       setCountryList(await fetchCountries());
       console.log(countryList);
   }
   fetchData();
    },[setCountryList])
    return <>
        <FormControl>
            <NativeSelect>
                <option value={global}>Global</option>
                {
                    countryList.map((country,i)=>{
                  return <option key={i} value={country.name}>{country.name}</option>
                    })
                }
            </NativeSelect>
        </FormControl>
    </>
}