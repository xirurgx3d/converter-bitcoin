import { put, call, takeEvery } from "redux-saga/effects";
import apiSingleton from "../../api/apiSingleton";
import getDataAdapter from "../../utils/adapter";
import {getCoins} from "../reducer/action/actions";
import ActionTypes from "../reducer/types/types"



function* getCoinSaga({state}){
    try {
        
        const response = yield call(apiSingleton.reqCoins)
        const getDate = yield getDataAdapter(response,state)
        yield put(getCoins(getDate))
        
    } catch (error) {
        yield console.log(error)
    }
    
}


export default function* watchCoinsSaga(){
    yield  takeEvery(ActionTypes.REQUST_COINS,getCoinSaga)
}