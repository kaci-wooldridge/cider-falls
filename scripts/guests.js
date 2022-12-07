import { guestList } from "./database.js";
import { randomName, getFirstName, getLastName } from "./nameGen.js";
const theGuestList = guestList()
const FN = getFirstName()
const LN = getLastName()

const randomFirstName = FN[Math.floor(Math.random() * FN.length)];
const randomLastName = LN[Math.floor(Math.random() * LN.length)];






// const newName = randomName();
// console.log(newName)
const  addGuestsToList = () => {
    

    for (let i = 0; i < 10; i++){
     
        let newGuest = {}
        newGuest.id = theGuestList.length + 1
        newGuest.name = randomName()
        console.log("second:", randomName())
        newGuest.parkId = Math.floor(Math.random() * (6-1) + 1)
        theGuestList.push(newGuest)
        
        }
    
}




export const Guests = () => {
    addGuestsToList()


    let final = "<ul>"
    for (const guest of theGuestList) {
         final += `<li> ${guest.name} </li>`
        }
    final += "</ul>"
    return final
}

