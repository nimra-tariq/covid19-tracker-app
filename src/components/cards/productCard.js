import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import Typography from '@material-ui/core//Typography';
import { useStyles } from './styles'
import CountUp from 'react-countup';

export default function ProductCard(props) {

  const today = new Date().toDateString();
  const classes = useStyles();

  return (<>
    <Box sx={{ minWidth: 275 }} className={classes.box}>
      <Card variant="outlined">
        <Card sx={{ minWidth: 275 }} className={props.cardNo === 0 ? classes.infected : props.cardNo === 1 ? classes.recovered : props.cardNo === 2 ? classes.death : ''}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} variant='h6' gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="h3" component="div">
              <CountUp start={0} end={props.cases} duration={2.5} seprator=',' />
            </Typography>
            <Typography sx={{ mb: 1.5 }} >
              {today}
            </Typography>
            <Typography variant="body2">
              {props.description}
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Card>
    </Box>
  </>);
}