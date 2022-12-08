import { Guests } from "./guests.js"
import { parkNames } from "./parkAreas.js"
import { areaServices } from "./services.js"




const applicationHTML = `
<section class="services-offered">
    ${areaServices()}
</section>

<section class="parks-services">
    ${parkNames()}
</section>
<section class="park-guest-list">
    <h2 class="title-guest">Park Guests</h2>
    <div>${Guests()}</div>
</section>

`


const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationHTML

