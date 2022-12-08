import { guestList, parkList } from "./database.js";
import { randomName } from "./nameGen.js";
const theGuestList = guestList()
const parks = parkList()


const  addGuestsToList = () => {

    for (let i = 0; i < 20; i++){
     
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
    console.log(theGuestList)

    let final = "<ul>"
    for (const guest of theGuestList) {
         final += `<li> ${guest.name} </li>`
        }
    final += "</ul>"
    return final
}

export const youAreHere = (target) => {
    let guestNumber = 0
    
    for (const guest of theGuestList) {
        if(guest.parkId === parseInt(target)) {
            guestNumber++
        }
    }
    return window.alert("There are " + guestNumber + " guests in this area.")
}