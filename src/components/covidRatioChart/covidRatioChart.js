import { Title } from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import './covidRatioChart.css'

export default function CovidChart() {

  
    const labels = [
        'Infected',
        'Recovered',
        'Death',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'People',
            backgroundColor: ['rgb(255, 247, 205)','rgb(208, 242, 255)','rgb(255, 231, 217)'],
            borderColor: ['rgb(122, 79, 1)','rgb(4, 41, 122)','rgb(122, 12, 46)'],
            borderWidth: 2,
            data: [200, 1000, 500],
        }]
    };


    return (<div className="barChart">
        <Bar data={data}
        options={{plugins:{title:{
            display:true,
            text:'Current State in ',
            fontSize:20
        },legend:{
            display:true,
            position:'right'
        }}}}
        />
    </div>);
}




