
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import './chart.css'
import React, { useState } from 'react'
import { useContext } from 'react'
import { dailyData } from "./fetchApi";
import { Line } from "react-chartjs-2";
import { MyContext } from "../../context/context";


export default function CovidChart(props) {

    const [dailyStats, setStats] = useState([]);
    const myContext = useContext(MyContext);

    useEffect(() => {

        function fetchData() {
            dailyData().then((resp) => {
                setStats(resp);
            })
        }
        fetchData();
    }, [setStats])



    const labels = dailyStats.map((obj) => obj.reportDate);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "deaths",
                data: dailyStats.map((obj) => obj.deaths.total),
                fill: false,
                backgroundColor: "rgb(122, 12, 46)",
                borderColor: "rgb(122, 12, 46)"
            },
            {
                label: "infected",
                data: dailyStats.map((obj) => obj.confirmed.total),
                fill: true,
                backgroundColor: 'rgb(255, 247, 205,0.6)',
                borderColor: 'rgb(122, 79, 1)'
            },

        ]
    };

    const labelsBarChart = [
        'Infected',
        'Recovered',
        'Deaths',
    ];

    const dataBarChart = {
        labels: labelsBarChart,
        datasets: [{
            label: '',
            backgroundColor: ['rgb(255, 247, 205)', 'rgb(208, 242, 255)', 'rgb(255, 231, 217)'],
            borderColor: ['rgb(122, 79, 1)', 'rgb(4, 41, 122)', 'rgb(122, 12, 46)'],
            borderWidth: 2,
            data: [props.confirmed, props.recovered, props.deaths],
        }]
    };

    return <div className="container">

        {(myContext.countryName.cname && myContext.countryName.cname!=='global') ? (props.confirmed) ?
            <div className="barChart">
                <Bar data={dataBarChart}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: 'Current State in ' + myContext.countryName.cname,
                                fontSize: 20
                            }, legend: {
                                display: false,
                                position: 'right'
                            },
                        }
                    }}
                />
            </div> : <div className="d-flex justify-content-center align-items-center text-center vh-100 min-vh-100" >
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            : (dailyStats.length) ? <div className="line">
                <Line data={data}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Global",
                                fontSize: 20
                            }, legend: {
                                display: true,
                                position: 'right'
                            }
                        }
                    }}
                />
            </div> : null
        }
    </div>

}