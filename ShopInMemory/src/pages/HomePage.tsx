import React from "react";
import tw, { css } from "twin.macro";
import NavBar from "./NavBar";

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <button
                className="btn-base"
            > Hello</button>
            <button
                className="btn-base"
            > World</button>
        </>
    );
};

export default HomePage;