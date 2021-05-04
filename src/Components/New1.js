import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {background} from '../images/background.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height:250,
    color: theme.palette.text.secondary,
  },
  media:{
      height:75,
      marginTop:10,
      marginBottom:5,
  },
  typography:{
      marginTop:95,
  }
}));

export default function New1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img className={classes.media} src={"../images/background.png"}></img>
                    <Typography className={classes.typography}>A1 Shoe</Typography>
                    <Typography>Price :$0.00</Typography>
                    <Button variant='contained' color='primary'> See Details</Button>
                </Paper>
            </Grid>
      </Grid>
    </div>
  );
}
