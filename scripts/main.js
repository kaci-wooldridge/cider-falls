import { parkList, serviceList } from "./database.js"
import { parkNames } from "./parkAreas.js"
import { serviceNames } from "./services.js"
const parks = parkList();
const services = serviceList()
// ${parkNames()}
// ${serviceNames()}


const areaWithService = () => {}

const areaServices = () => {
    let eachAreaHtml = ""
    
    for (const area of parks) {
        eachAreaHtml += `${area.name} `
        if (Array.isArray(area.serviceId)){
            for (let i=0; i<area.serviceId.length; i++){
                for (const service of services) {
                    if(service.id === area.serviceId[i]) {
                         eachAreaHtml += `<li> ${service.name} </li>`
                    }   
                }
            }
        }  
    }
    return eachAreaHtml
}

const applicationHTML = `
${areaServices()}
`
const RenderHtml = () => {
   
    return mainContainer.innerHTML = `
    <h1> Cider Falls</h1>
    
    <article class="parkAreas">
        <section class="park1">
            <h2>Chamfort River</h2>
            
        </section>
        <section class="park2">
            <h2>Lost Wolf Hiking Trail</h2>
            
        </section>
        <section class="park3">
            <h2>The Lodge</h2>
            
        </section>
        
    </article>
    `
}


const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationHTML