import { areaServices } from "./services.js"





const applicationHTML = `

<section class="parks-services">
    ${areaServices()}
</section>
<section class="park-guest-list">
<h2>Park Guests</h2>

</section>

`

const mainContainer = document.querySelector(".container")
mainContainer.innerHTML = applicationHTML