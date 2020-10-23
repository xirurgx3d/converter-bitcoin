import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { debounse } from '../../utils/utilse';




function Convector({state,conver_to,conver_from}) {
  //const {state,to,from} = state
  const [inpt_to,setTO] = useState(null)
  const [inpt_from,setFrom] = useState(null)
  const debon = debounse(300)
  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    }
  }));
  
  
  
  
  useEffect(()=>{
    setFrom(Number(inpt_to) * Number(state.to.prise) / Number(state.from.prise))
  },[inpt_to])
  
  
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField id="filled-basic" label="сумма" variant="filled" onChange={e => debon(setTO,e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              {
                state.to.name ? state.to.name : 'есть'
              }
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              onChange={conver_to}
            >
              {
                state.state
                  .filter(val => val.name !== state.to.name)
                  .map((val,index)=>{
                  return <MenuItem key={index} value={{name:val.name,prise:val.price}}>{val.name}</MenuItem>
                })
              }
              
              
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField id="filled-basic" label="сумма" value={inpt_from || ''} variant="filled" />
        </Grid>
        <Grid item xs={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              {
                state.from.name ? state.from.name : 'купить'
              }
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select2"
              value={inpt_from}
              onChange={conver_from}
            >
              {
                state.state
                  .filter(val => val.name !== state.from.name)
                  .map((val,index)=>{
                    return <MenuItem key={index} value={{name:val.name,prise:val.price}}>{val.name}</MenuItem>
                  })
              }
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );

}

function mapState(state) {
  return {state:{...state}}
}
function mapProps(dispatch) {
  return {
    conver_to: e=> dispatch({type:'TO',data:e}),
    conver_from:e=> dispatch({type:'FROM',data:e})
  }
}

export default connect(mapState,mapProps)(Convector)