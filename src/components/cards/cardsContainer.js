import ProductCard from "./productCard";
import { Grid } from '@material-ui/core';
import { useStyles } from "./styles";

export default function CardContainer() {
    const classes=useStyles();
    let cardArray = [
        {
            cardTitle: 'Infected',
            totalCases: 0,
            lastDescription: 'Number of Active Cases of COVID-19',
    
        },
        {
            cardTitle: 'Recovered',
            totalCases: 0,
            lastDescription: 'Number of Recoveries from COVID-19',
        
        },
        {
            cardTitle: 'Deaths',
            totalCases: 0,
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