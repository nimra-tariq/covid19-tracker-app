import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardActions from '@material-ui/core//CardActions';
import CardContent from '@material-ui/core//CardContent';
import Button from '@material-ui/core//Button';
import Typography from '@material-ui/core//Typography';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
      be null hall
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
