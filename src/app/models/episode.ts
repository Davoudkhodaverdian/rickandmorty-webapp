import { Character } from "./character"

export interface Episode {
    id: string
    // The id of the episode.
    name: string
    // The name of the episode.
    air_date?: string
    // The air date of the episode.
    episode?: string
    // The code of the episode.
    characters?: Character[]
    // List of characters who have been seen in the episode.
    created?: string
    // Time at which the episode was created in the database.
}