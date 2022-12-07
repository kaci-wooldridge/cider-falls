import { guests } from "./guests.js"
import { randomName } from "./nameGen.js"
import { areaServices } from "./services.js"





const applicationHTML = `

<section class="parks-services">
    ${areaServices()}
</section>
<section class="park-guest-list">
<h2>Park Guests</h2>
${guests()}
</section>

`

const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationHTML