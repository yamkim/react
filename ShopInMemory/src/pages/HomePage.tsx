import React from "react";
import tw, { css } from "twin.macro";

const HomeWrapper = tw.div`
    text-3xl
`

const HomePage = () => {
    return (
        <HomeWrapper>
            Home Page 입니다.
        </HomeWrapper>
    );
};

export default HomePage;