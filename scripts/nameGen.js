const firstNames = [
    "Addison","Natalie","Mia","Alexis","Alyssa","Hannah","Ashley","Ella","Sarah","Grace","Taylor","Brianna",
    "Lily","Hailey","Anna","Victoria","Kayla","Lillian","Lauren","Kaylee","Allison","Savannah","Nevaeh","Gabriella",
    "Sofia","Makayla","Avery","Riley","Julia","Leah","Aubrey","Jasmine","Audrey","Katherine","Morgan","Brooklyn","Destiny",
    "Sydney","Alexa","Kylie","Brooke","Kaitlyn","Evelyn","Layla","Madeline","Kimberly","Zoe","Jessica","Peyton","Alexandra",
    "Claire","Madelyn","Maria","Mackenzie","Arianna","Jocelyn","Amelia","Angelina","Trinity","Andrea","Maya","Valeria","Sophie",
    "Rachel","Vanessa","Aaliyah","Mariah","Gabrielle","Katelyn","Ariana","Bailey","Camila","Jennifer","Melanie","Gianna",
    "Charlotte","Paige","Autumn","Payton","Faith","Sara","Isabelle","Caroline","Genesis","Isabel","Mary","Zoey","Gracie",
    "David","Noah","Aiden","James","Ryan","Logan","John","Nathan","Elijah","Christian","Gabriel","Benjamin","Jonathan","Tyler",
    "Samuel","Nicholas","Gavin","Dylan","Jackson","Brandon","Caleb","Mason","Angel","Isaac","Evan","Jack","Kevin","Jose",
    "Isaiah","Luke","Landon","Justin","Lucas","Zachary","Jordan","Robert","Aaron","Brayden","Thomas","Cameron","Hunter","Austin",
    "Adrian","Connor","Owen","Aidan","Jason","Julian","Wyatt","Charles","Luis","Carter","Juan","Chase","Diego","Jeremiah","Brody",
    "Xavier","Adam","Carlos","Sebastian","Liam","Hayden","Nathaniel","Henry","Jesus","Ian","Tristan","Bryan","Sean","Cole","Alex","Eric"
]

const lastNames = [
    "Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez",
    "Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee",
    "Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen","Sanchez","Wright",
    "King","Scott","Green","Baker","Adams","Nelson","Hill","Ramirez","Campbell","Mitchell","Roberts","Carter",
    "Phillips","Evans","Turner","Torres","Parker","Collins","Edwards","Stewart","Flores","Morris","Nguyen","Murphy",
    "Rivera","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gomez","Kelly","Howard","Ward","Cox",
    "Diaz","Richardson","Wood","Watson","Brooks","Bennett","Gray","James"
]

// const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
// const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];


export const randomName = () =>{
  let fullname = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`

  return fullname
}

// export const randomName = function* () {
//     while(true){
//         const firstIndex = firstNames[Math.floor(Math.random() * firstNames.length)];
//         const secondIndex = lastNames[Math.floor(Math.random() * lastNames.length)];
//         yield firstIndex + " " + secondIndex

//     }
// }()

export const getFirstName = () => {
    return firstNames.map(fn => ([...fn]))
}

export const getLastName = () => {
    return lastNames.map(ln => ([...ln]))
}