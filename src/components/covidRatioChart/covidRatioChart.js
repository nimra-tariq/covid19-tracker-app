import { Title } from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import './covidRatioChart.css'
import { MyContext } from "../../context/context";
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useContext } from 'react'





export default function CovidChart() {

    let [country, setCountry] = useState({ Country: 'Pakistan', ThreeLetterSymbol: 'Pak' });
    const myContext = useContext(MyContext);
    const [covidStats, setStats] = useState({ infected: 0, deaths: 0, recovered: 0 })
    useEffect(() => {
        console.log("useEffect ");
       getData(country.Country);
    //  myContext.dispatchFun({ TotalDeaths:covidStats.deaths,TotalRecovered:covidStats.recovered,TotalCases:covidStats.infected, type: "getStats" })
    }, []);

    const [value, setValue] = useState(country.Country)
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {

        setValue(value)
        console.log(value.label+'label');
        setCountry({ Country: value.label, ThreeLetterSymbol: value.label.slice(0, 3) });
        // myContext.dispatchFun({ cname: country, type: "getCountryName" })
        getData(value.label);
        
    }
    function getData(cname) {
        async function fetchData() {
            try {
                console.log(cname +"inside fetch function");
                const resp = await fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${cname}/${cname.slice(0,3)}`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
                        "x-rapidapi-key": "6e72cdc788msh1c9f3ce440a111dp1d5f56jsn33d21c537927"
                    }
                })
                const data = await resp.json();
                console.log(data);
                return data;
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchData().then(data => {
            
            setStats({
                infected: data[0].TotalCases,
                deaths: data[0].TotalDeaths,
                recovered: data[0].TotalRecovered
            });
            myContext.dispatchFun({ TotalDeaths:data[0].TotalDeaths,TotalRecovered:data[0].TotalRecovered,TotalCases:data[0].TotalCases, type: "getStats" })
            
        }
        )
    }



    console.log(country.Country+" inside covidChart");


    

    const labels = [
        'Infected',
        'Recovered',
        'Deaths',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'People',
            backgroundColor: ['rgb(255, 247, 205)', 'rgb(208, 242, 255)', 'rgb(255, 231, 217)'],
            borderColor: ['rgb(122, 79, 1)', 'rgb(4, 41, 122)', 'rgb(122, 12, 46)'],
            borderWidth: 2,
            data: [covidStats.infected, covidStats.recovered, covidStats.deaths],
        }]
    };


    return (

        <>
            <div className="d-flex justify-content-center boxx">
                <Select options={options} value={value} onChange={changeHandler} />
            </div>

            <div className="barChart">
                <Bar data={data}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: 'Current State in ' + country.Country,
                                fontSize: 20
                            }, legend: {
                                display: true,
                                position: 'right'
                            }
                        }
                    }}
                />
            </div>
        </>
    );
}




