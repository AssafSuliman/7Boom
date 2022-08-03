class Player {
  constructor(name, id){
    this.name = name
    this.id = id
  }
  sayName (number) {
    console.log(number ,this.name)
  }
}

export default Player