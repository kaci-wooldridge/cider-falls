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
    let eachAreaHtml = ``
    
    for (const area of parks) {
        eachAreaHtml += `<div class="park" id="area-${area.id}"><h2 class="park-name" id="area--${area.id}"> ${area.name} </h2>`
        // if (Array.isArray(area.serviceId)){
        //     for (let i=0; i<area.serviceId.length; i++){
        //         for (const service of services) {
        //             if(service.id === area.serviceId[i]) {
        //                  eachAreaHtml += `<li class="services">${service.name} </li>`
        //             }   
        //         }
        //     }
        // }  
        eachAreaHtml += `</div>` 
    }
    return eachAreaHtml
}

