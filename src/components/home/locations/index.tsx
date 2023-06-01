import React from "react";
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import { Location } from "../../../app/models/location";

const Locations: React.FC = () => {
    const GET_LOCATIONS = gql(`query GetLocations {
        locations {
            results {name,id,type,dimension,created}
        }
    }`);
    const { loading, error, data } = useQuery(GET_LOCATIONS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data);

    return (
        <div className="">
            {
                data?.locations?.results.map(({ id, name }: Location) => (
                    <div key={id}>
                        <h3>{name}</h3>
                        
                        <br />

                    </div>
                ))
            }
        </div>
    )
}

export default Locations;