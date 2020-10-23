//import { put, takeEvery, all } from 'redux-saga/effects'
import watchCoinsSaga from './watchCoinAsync'

export default function* rootSaga() {
   yield watchCoinsSaga()
}