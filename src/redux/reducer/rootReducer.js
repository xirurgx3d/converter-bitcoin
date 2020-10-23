import ActionTypes from "./types/types";

const initState = {
  loginData:false,
  state:[],
  to:{},
  from:{}
}

export default function rootReducer(state = initState,action) {
  //console.log(state)
  switch (action.type){
    case ActionTypes.GET_COINS:
      return {...state,loginData:true,state:[...action.data]}
      break;
    case 'TO':
      return {...state,to:action.data.target.value}
      break;
    case 'FROM':
      return {...state,from:action.data.target.value}
    default:
      return state
  }
}