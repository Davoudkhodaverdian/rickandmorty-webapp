import { Episode } from "./episode"
import { Location } from "./location"

export interface Character {
    id: string
    // The id of the character.
    name: string
    // The name of the character.
    status?: string
    // The status of the character ('Alive', 'Dead' or 'unknown').
    species?: string
    // The species of the character.
    type?: string
    // The type or subspecies of the character.
    gender?: string
    // The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
    origin?: Location
    // The character's origin location
    location?: Location
    // The character's last known location
    image?: string
    // Link to the character's image.
    // All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
    episode?: Episode
    // Episodes in which this character appeared.
    created?: string
    // Time at which the character was created in the database.
}