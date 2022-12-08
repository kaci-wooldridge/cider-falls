import { parkList, serviceList } from "./database.js";
import { parkLocations } from "./parkAreas.js";
const services = serviceList()
const parks = parkList()


// export const areaServices = () => {
//     let eachAreaHtml = ``
    
//     for (const area of parks) {
//         eachAreaHtml += `<div class="park" id="area-${area.id}"><h2 class="park-name" id="area--${area.id}"> ${area.name} </h2>`
//         // if (Array.isArray(area.serviceId)){
//         //     for (let i=0; i<area.serviceId.length; i++){
//         //         for (const service of services) {
//         //             if(service.id === area.serviceId[i]) {
//         //                  eachAreaHtml += `<li class="services">${service.name} </li>`
//         //             }   
//         //         }
//         //     }
//         // }  
//         eachAreaHtml += `</div>` 
//     }
//     return eachAreaHtml
// }

export const areaServices = () =>{
    let html =``
    for(const service of services){
        html += `<div class="services" id="service--${service.id}">*${service.name}</div>`
    }
    return html += ``
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
  
      if (itemClicked.id.startsWith("service")) {
  
      const [,serviceKey] = itemClicked.id.split("--")

          parkLocations(serviceKey)
      }
})