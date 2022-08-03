class Boom {
  printBoom (number) {
    if(number % 7 === 0 || number % 10 === 7){
      console.log('BOOM')
    }
  }
}

export default Boom