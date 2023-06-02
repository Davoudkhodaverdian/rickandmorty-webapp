import React from "react";
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import { Location } from "../../app/models/location";
import Loading from "../shared/loading";

const Locations: React.FC = () => {
    const GET_LOCATIONS = gql(`query GetLocations {
        locations {
            results {name,id,type,dimension,created}
        }
    }`);
    const { loading, error, data } = useQuery(GET_LOCATIONS);
    if (loading) return <Loading />;
    if (error) {
        console.log(error.message)
        return <p></p>;
    }
    console.log(data);

    return (
        <div className="">
            <div className='p-2'>Information of locations:</div>
            <div className='max-h-[calc(100vh-240px)] p-3 overflow-auto shadow border-t  border-purple-600'>
                {data?.locations?.results.map(({ id, name, type, dimension, created }: Location) => (
                    <div key={id} className='border-b py-2 border-purple-200'>
                        <h3>{name}</h3>
                        <div>type :{type}</div>
                        <div>dimension :{dimension}</div>
                        <div>created :{created}</div>
                        <br />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Locations;