import { parkList, serviceList } from "./database.js"
import { parkNames } from "./parkAreas.js"
import { serviceNames } from "./services.js"
const parks = parkList();
const services = serviceList()
// ${parkNames()}
// ${serviceNames()}


const areaWithService = () => {}

const areaServices = () => {
    let eachAreaHtml = ``
    
    for (const area of parks) {
        eachAreaHtml += `<div class="park" id="area-${area.id}"><h2 class="park-name"> ${area.name} </h2>`
        if (Array.isArray(area.serviceId)){
            for (let i=0; i<area.serviceId.length; i++){
                for (const service of services) {
                    if(service.id === area.serviceId[i]) {
                         eachAreaHtml += `<li class="services">${service.name} </li>`
                    }   
                }
            }
        }  
        eachAreaHtml += `</div>` 
    }
    return eachAreaHtml
}

const applicationHTML = `
<section class="parks-services">
    ${areaServices()}
</section>`

const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationHTML