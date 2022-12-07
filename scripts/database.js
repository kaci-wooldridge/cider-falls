const parkAreas = [
    {
        id: 1,
        name: "Chamfort River",
        serviceId:[ 1, 2, 3],
    },
    {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        serviceId:[4, 5, 6],
    },
    {
        id: 3,
        name: "The Lodge",
        extras: ["Hotel", "Restaurant"],
        serviceId: [3, 7, 8, 9]
    },
    {
        id: 4,
        name: "Gander River",
        serviceId: [3, 4]
    },
    {
        id: 5,
        name: "The Campgrounds",
        extras: ["Office park", "Playgrounds"],
        serviceId: [7, 8, 9]
    },
    {
        id: 6,
        name: "Pine Bluffs Trails",
        extras: "Food Vendors",
        serviceId: [4, 5, 10]
    }
]

const services = [
    {
        id: 1,
        name: "Rafting",
    },
    {
        id: 2,
        name: "Canoeing"
    },
    {
        id: 3,
        name: "Fishing"
    },
    {
        id: 4,
        name:"Hiking"
    },
    {
        id: 5,
        name:"Picnicking"
    },
    {
        id: 6,
        name:"Rock Climbing"
    },
    {
        id: 7,
        name: "Lodging"
    },
    {
        id: 8,
        name: "Parking"
    },
    {
        id: 9,
        name: "Information"
    },
    {
        id: 10,
        name: "Zip Lines"
    }
]

const guests = [
    {
        id: 1,
        name: "Billy-Bob jr",
        parkId: 1
    },
    {
        id: 2, 
        name: "Hunter Martinez",
        parkId: 2
    }
]

export const parkList = () =>{
    return parkAreas.map(pa=>({...pa}))
} 
export const serviceList = () =>{
    return services.map(s=>({...s}))
} 
export const guestList = () =>{
    return guests.map(g=>({...g}))
} 