import React from "react";
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import { Character } from "../../../app/models/character";

const Characters: React.FC = () => {
    const GET_CHARACTERS = gql(`query GetCharacters {
        characters {
            results {name,image,id,status,species,type,gender,created}
        }
    }`);
    const { loading, error, data } = useQuery(GET_CHARACTERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data);
    return (
        <div className="">
            {
                data?.characters?.results.map(({ id, name, image }: Character) => (
                    <div key={id}>
                        <h3>{name}</h3>
                        <img width="400" height="250" alt={name} src={`${image}`} />
                        <br />

                    </div>
                ))
            }
        </div>
    )
}

export default Characters;