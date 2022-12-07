import { guestList } from "./database.js";
import { randomName } from "./nameGen.js";
const theGuestList = guestList()
let newName = randomName()

const newNames = () =>{
    const namesArray = []
    for (let i = 0; i < 10; i++){
        namesArray.push(randomName())
    }
    return namesArray
}
console.log(newNames())

const addGuestsToDataBase = () =>{
    let newGuest = {}
    for (let j = 0; j < 10; j++){
        
        newGuest.id = theGuestList.length + 1
        newGuest.name = newName
        theGuestList.push(newGuest)
        newGuest={}
    }
    return theGuestList
}
addGuestsToDataBase()
console.log(theGuestList)

export const guests = () =>{
    for (const guest of theGuestList){
        return guest.name
    }
}