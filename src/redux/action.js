
export function getCoin(data) {
  return async disp =>{
    return await setTimeout(()=> disp({type:'add',data:data}),3000)
  }
}