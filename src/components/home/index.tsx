import React from "react";
import Characters from "./characters";
import { Fade } from "@mui/material";

const Home: React.FC = () => {

    return (
        <div className="">
            <Fade in={true} timeout={2000}>
                <div>
                    <div>home page</div>
                    {<Characters />}
                </div>
            </Fade>
        </div>
    )
}

export default Home;