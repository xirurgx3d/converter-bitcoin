import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container,Grid,Paper} from '@material-ui/core';
import Coins from "./components/Coins/Coins";
import Convector from "./components/valute/Сonvector";
import Loader from './components/Loader/Loader';


function App() {

  const [loading,setLoding] = useState(false)
  
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:50
    },
    paper: {
      padding:20
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  
  const classes = useStyles();
  
  return (
    <>
    {
      !loading && ReactDOM.createPortal(
        <Loader/>,
        document.getElementById('loader')
      ) 
    } 
    <Container maxWidth="lg">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper}><Coins lodader={setLoding} /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Convector />
          </Paper>
        </Grid>
        
      </Grid>
    </Container>
    </>
  );
}

export default App;


/*
  let url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=69c6be38942c0d4c9950f28b1140c3f9dcea1ee9a7a8f11f72f1d3d52500e92c'
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  */