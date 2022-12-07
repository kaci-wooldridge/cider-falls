import { parkList } from "./database.js"
import { parkNames } from "./parkAreas.js"
import { serviceNames } from "./services.js"

const applicationHTML = `
${parkNames()}
${serviceNames()}
`





const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationHTML