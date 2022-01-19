import ProductCard from "./productCard";
import { Grid } from '@material-ui/core';
import { useStyles } from "./styles";
import { MyContext } from '../../context/context';
import { useContext } from 'react';

export default function CardContainer() {
    const classes=useStyles();
    const myContext=useContext(MyContext);
    let cardArray = [
        {
            cardTitle: 'Infected',
            totalCases: myContext.countryName.TotalCases,
            lastDescription: 'Number of Active Cases of COVID-19',
    
        },
        {
            cardTitle: 'Recovered',
            totalCases:  myContext.countryName.TotalRecovered,
            lastDescription: 'Number of Recoveries from COVID-19',
        
        },
        {
            cardTitle: 'Deaths',
            totalCases:  myContext.countryName.TotalDeaths,
            lastDescription: 'Number of Deaths Caused by COVID-19',
       
        }
    ]
    return (
        <>
            <Grid container spacing={10} className={classes.gridContainer}>
                {cardArray.map((card, i) => {
                   return <Grid item key={i} md={3}>
                            <ProductCard cardNo={i} title={card.cardTitle} cases={card.totalCases} description={card.lastDescription}></ProductCard>
                    </Grid>
                })}
            </Grid>
        </>
    );
}