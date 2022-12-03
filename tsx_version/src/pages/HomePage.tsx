import React from "react";
import tw, { css } from "twin.macro";

const HomePage = () => {
    return (
        <div
        className=""
        css={[
            tw`text-3xl font-bold underline`,
            css`
                background: #ff802c;
            `,
        ]}
        >
        Hello world
        </div>
    );
};

export default HomePage;