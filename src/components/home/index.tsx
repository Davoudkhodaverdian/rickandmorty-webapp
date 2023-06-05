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
                    <div>
                        <img src="/images/rick-and-morty.webp" alt="rick-and-morty" className="mx-auto  max-h-[140px]" />
                    </div>
                    {<Characters />}
                </div>
            </Fade>
        </div>
    )
}

export default Home;