import axios from "axios"
const characters = [
    {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
        location:"Citadel of Ricks",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
        location:"Citadel of Ricks",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
        id: 3,
        name: "Summer Smith",
        status: "Dead",
        species: "Human",
        gender: "Female",
        location:"Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
        id: 4,
        name: "Beth Smith",
        status: "Dead",
        species: "Human",
        gender: "Female",
        location:"Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    }
]

export default characters;