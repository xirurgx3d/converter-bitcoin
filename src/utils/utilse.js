export function debounse(timer) {
    let tik
    return function (fn,event) {
      
      tik && clearTimeout(tik)
      tik = setTimeout(()=>{
        tik = null
        fn(event)
      },timer)
      //clearTimeout(tik -1)
    }
  }