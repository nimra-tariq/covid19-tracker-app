import ProductCard from "./productCard";
import { Grid } from '@material-ui/core';

export default function CardContainer(props) {
    let cardArray = [
        {
            cardTitle: 'Infected',
            totalCases: props.confirmed,
            lastDescription: 'Number of Active Cases of COVID-19',

        },
        {
            cardTitle: 'Recovered',
            totalCases: props.recovered,
            lastDescription: 'Number of Recoveries from COVID-19',

        },
        {
            cardTitle: 'Deaths',
            totalCases: props.deaths,
            lastDescription: 'Number of Deaths Caused by COVID-19',

        }
    ]
    return <> {(props.confirmed) ? (
        <div className="container">
            <Grid container spacing={3} justifyContent="center">
                {cardArray.map((card, i) => {
                    return <Grid item key={i} elevation={10} xs={12} md={3}>
                        <ProductCard cardNo={i} title={card.cardTitle} cases={card.totalCases} description={card.lastDescription}></ProductCard>
                    </Grid>
                })}
            </Grid>
        </div>
    ) :null
    }
    </>
}