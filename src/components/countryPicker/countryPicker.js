import { useContext, useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core"
import { fetchCountries } from '../covidRatioChart/fetchApi'
import { useStyles } from "./styles";
import { MyContext } from "../../context/context";



export default function CountryPicker(props) {
    const classes = useStyles();
    const [countryList, setCountryList] = useState([]);

    const myContext = useContext(MyContext);

    useEffect(() => {
        function fetchData() {
            fetchCountries().then((stats) => {
                setCountryList(stats);
            })
        }
        fetchData();
    }, [setCountryList])

    return <> {(props.confirmed) ?
        <div className={classes.container}>
            <FormControl>
                <NativeSelect onChange={e => { myContext.dispatchFun({ cname: e.target.value, type: "getCountryName" }); props.onCountrySelection(e.target.value); }}>
                    <option value='global'>Global</option>
                    {
                        countryList.map((country, i) => {
                            return <option key={i} value={country}>{country}</option>
                        })
                    }
                </NativeSelect>
            </FormControl>
        </div> : null
    }
    </>
}