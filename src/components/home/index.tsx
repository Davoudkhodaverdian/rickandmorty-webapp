import React from "react";
import Characters from "./characters";
import { Fade } from "@mui/material";
import Title from "./title";

const Home: React.FC = () => {

    return (
        <div className="">
            <Fade in={true} timeout={2000}>
                <div>
                    <Title />
                    {<Characters />}
                </div>
            </Fade>
        </div>
    )
}

export default Home;