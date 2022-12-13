import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import React from "react";
import tw, { css } from "twin.macro";

type Props = {
    children: EmotionJSX.Element[];
}

const TodoTemplate = ({ children }: Props) => {
    return (
        <div
            css={[
                tw`flex flex-row justify-center p-14`
            ]}
        >
            <div
                css={[
                    tw` flex flex-col
                    w-[512px] h-[768px] bg-white
                    border-2 border-gray-200 rounded-3xl shadow-lg `
                ]}
            >{children}</div>
        </div>
    );
};

export default TodoTemplate;