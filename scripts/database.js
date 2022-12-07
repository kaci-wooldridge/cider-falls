const parkAreas = [
    {
        id: 1,
        name: "Chamfort River",
        serviceId:[ 1, 2, 3],
        guestId: 1
    },
    {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        serviceId:[4, 5, 6],
    },
    {
        id: 3,
        name: "the Lodge",
        extras: ["hotel", "restaurant"],
        serviceId: [3, 7, 8, 9]
    },
    {
        id: 4,
        name: "Gander River",
        serviceId: [3, 4]
    },
    {
        id: 5,
        name: "the Campgrounds",
        extras: ["office park", "playgrounds"],
        serviceId: [7, 8, 9]
    },
    {
        id: 6,
        name: "Pine Bluffs Trails",
        extras: "food vendors",
        serviceId: [4, 5, 10]
    }
]

const services = [
    {
        id: 1,
        name: "rafting",
    },
    {
        id: 2,
        name: "canoeing"
    },
    {
        id: 3,
        name: "fishing"
    },
    {
        id: 4,
        name:"hiking"
    },
    {
        id: 5,
        name:"picnicking"
    },
    {
        id: 6,
        name:"rock climbing"
    },
    {
        id: 7,
        name: "lodging"
    },
    {
        id: 8,
        name: "parking"
    },
    {
        id: 9,
        name: "information"
    },
    {
        id: 10,
        name: "zip lines"
    }
]

const guests = [
    {
        id: 1,
        name: "Billy-Bob jr"
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