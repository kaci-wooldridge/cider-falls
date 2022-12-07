import { parkList, serviceList } from "./database.js";
const services = serviceList()
const parks = parkList()

//first pull out serviceIds from parks
const pullServiceIds = () =>{
    let serviceIdArray = []
    for(const park of parks){
        serviceIdArray.push(parseInt(park.serviceId))
    }
    return serviceIdArray
}
const pulledIds = pullServiceIds()


export const serviceNames = () =>{
    const services = serviceList()
    let names= "provided services: "

    const listItems = services.map(service =>{
        let i = 0
        while(pulledIds[i]){
        return ` ${service.name}`
        }
    });
    names += listItems.join(", ")
    
    return names
}
