import React from "react";
import Characters from "./characters";
import Locations from "./locations";

const Home: React.FC = () => {


    return (
        <div className="m-6">
            <div>home page</div>
            <div>rick and morty web application</div>
            {/* <Characters/> */}
            <Locations/>
        </div>
    )
}

export default Home;