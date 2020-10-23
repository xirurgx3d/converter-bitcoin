import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ReqCoins } from '../../redux/reducer/action/actions';
import ValuteBody from "./Coins_list";





function Coins({lodader,state,loginData,getcoins}) {
  
  useEffect(()=> {
    getcoins(state)
  },[])
  useEffect(()=>{
    lodader(loginData)
    let timeid = setTimeout(()=> getcoins(state),5000)
    return () => clearTimeout(timeid)
  })

  return (
    <TableContainer>

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">cripto</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">correct</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loginData && state.map((row,index) => (
            <ValuteBody  key={index} {...row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function mapState(state) {
  return {...state}
}
function mapProps(dispatch) {
  return {
    getcoins:sate => dispatch(ReqCoins(sate))
  }
}

export default connect(mapState,mapProps)(Coins)


/*
export class Valute extends Component{
  constructor(){
    super()
    this.state = {
      status:false,
      data:[]
    }
    
  }
  componentDidMount(){
    this.crone()
  }
  
  crone(){
    let timer;
    this.getCoins()
    timer =  setInterval(()=>{
      this.state.status ? this.getCoins() : clearInterval(timer)
    },3000)
  }
  getData(data){
    return [...data].map((res,index) =>{
      const state = this.state.data
      let obj = {}
      if(state.length !== 0){
        obj = {
          oldprice: state[index].price !== res.RAW.USD.PRICE ? state[index].price : null ,
          chg: state[index].price > res.RAW.USD.PRICE ? 'up' : 'down'
        }
      }
      return {
        name:res.CoinInfo.Name,
        fullname:res.CoinInfo.FullName,
        img:res.CoinInfo.ImageUrl,
        price:res.RAW.USD.PRICE,
        change:res.DISPLAY.USD.CHANGEPCT24HOUR,
        ...obj
      }
    })
  }
  
  async getCoins (){
    try {
      const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=69c6be38942c0d4c9950f28b1140c3f9dcea1ee9a7a8f11f72f1d3d52500e92c'
      const response = await fetch(url)
      const data = await response.json()
      const result = this.getData(data.Data)
      this.setState({
        status:true,
        data:result
      })
    } catch (e){
      console.log(e)
      this.setState({
        status:false,
      })
    }
  
  }
  
  
  
  render(){
    //console.log(this.state)
    return (
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{
                this.state.status ? 'ok' : 'login'
              }</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">cripto</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">correct</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map((row,index) => (
              <ValuteBody  key={index} {...row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}
*/