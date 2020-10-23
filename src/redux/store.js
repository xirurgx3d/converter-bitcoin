import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducer/rootReducer";
import rootSaga from './saga/saga';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
export  default  store