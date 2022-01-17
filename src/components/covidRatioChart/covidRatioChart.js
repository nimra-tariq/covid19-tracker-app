import { Title } from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import './covidRatioChart.css'
import { useState } from "react";
import { MyContext } from "../../context/context";
import { useContext } from "react";


export default function CovidChart() {

    const myContext=useContext(MyContext);
    console.log(useContext.countryName.cname);

    const [covidStats, setStats] = useState({ infected: 0, deaths: 0, recovered: 0 })
    useEffect(() => {
        function getData() {
            async function fetchData() {
                const resp = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/India/ind", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
                        "x-rapidapi-key": "6e72cdc788msh1c9f3ce440a111dp1d5f56jsn33d21c537927"
                    }
                })
                const data = await resp.json();
                return data;
            }
            fetchData().then(data => {
                data.forEach((statsObj) => {
                    // console.log(statsObj.TotalDeaths)
                    // console.log(statsObj.TotalRecovered)
                    // console.log(statsObj.TotalCases)
                    setStats({
                        infected: statsObj.TotalCases,
                        deaths: statsObj.TotalDeaths,
                        recovered: statsObj.TotalRecovered
                    });
                });
                
            }
            )
        }
        getData();
    }, []);

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


    return (<div className="barChart">
        <Bar data={data}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Current State in ',
                        fontSize: 20
                    }, legend: {
                        display: true,
                        position: 'right'
                    }
                }
            }}
        />
    </div>);
}




