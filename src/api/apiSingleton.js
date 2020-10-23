class ApiSingleton{
    constructor(...fn){
        fn.forEach(fun =>{
            if(typeof fun === 'function'){
                this[fun.name] = fun
            }
        })
        
    }

    static _instanse = null
    static getInstance(...fn){
        if(!ApiSingleton._instanse){
            ApiSingleton._instanse = new ApiSingleton(...fn)
        }
        return ApiSingleton._instanse
    }
}

const reqCoins =  async () =>{
    const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=69c6be38942c0d4c9950f28b1140c3f9dcea1ee9a7a8f11f72f1d3d52500e92c'
    const response = await fetch(url)
    const data = await response.json()
    const result = data.Data
    return result
 }

// сохраняем принцип open/close
function getApi(){
   return ApiSingleton.getInstance(reqCoins)
}
export default getApi()