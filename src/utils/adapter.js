const getDataAdapter = (data,state) =>{
    
    return [...data].map((res,index) =>{
      
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
        price: res.RAW.USD.PRICE, //Math.floor(Math.random() * Math.floor(50))
        change:res.DISPLAY.USD.CHANGEPCT24HOUR,
        ...obj
      }
      
    })
}
export default getDataAdapter