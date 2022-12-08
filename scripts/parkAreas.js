import { parkList } from "./database.js";
import { youAreHere } from "./guests.js";
const parks = parkList()


document.addEventListener("click", (clickEvent) => {
      const itemClicked = clickEvent.target
    
        if (itemClicked.id.startsWith("area")) {
    
        const [,areaKey] = itemClicked.id.split("--")

            youAreHere(areaKey)
        }
    })



export const parkNames = () =>{
    let html = ``

    const listItems =
    parks.map(park =>{
        return `${park.name}`
    })

    html += listItems.join(" ")
    return html
}

