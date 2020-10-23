import ActionTypes from "../types/types"

const ReqCoins = prevstate =>{
    return {type:ActionTypes.REQUST_COINS,state:prevstate}
}

const getCoins = (data) => {
    return {type:ActionTypes.GET_COINS, data: data}
}
export {getCoins,ReqCoins}