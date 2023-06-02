import { Character } from "./character"

export interface Location {
    id: string
    // The id of the location.
    name: string
    // The name of the location.
    type?: string
    // The type of the location.
    dimension?: string
    // The dimension in which the location is located.
    residents?: Character[]
    // List of characters who have been last seen in the location.
    created?: string
    // Time at which the location was created in the database.
}