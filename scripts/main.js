import { parkList } from "./database.js"
import { parkNames } from "./parkAreas.js"
import { serviceNames } from "./services.js"
const park = parkNames()

const applicationHTML = `
    <div class="park1">${}</div>

${serviceNames()}
`

const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationHTML