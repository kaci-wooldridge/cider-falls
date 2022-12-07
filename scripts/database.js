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
        serviceId:[1, 2, 3],
    },
    {
        id: 3,
        name: "the Lodge",
        extras: ["hotel", "restaurant"],
        serviceId: [4, 5, 6]
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