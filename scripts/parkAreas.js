import { parkList } from "./database.js";
const parks = parkList()

export const parkNames = () =>{
    let html = ``

    const listItems =
    parks.map(park =>{
        return `${park.name}`
    })

    html += listItems.join(" ")
    return html
}

