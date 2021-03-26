
export const debounce = (fn: any, delay: number) => {
  let timeoutID: undefined | number
  return function (this:any) {
    clearTimeout(timeoutID)
    const args = arguments
    const that = this 
    timeoutID = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}
