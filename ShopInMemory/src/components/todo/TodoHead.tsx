import React from "react";
import tw, { css } from "twin.macro";

const TodoHeadBlock = tw.div`
    p-12
    border-b-2
`;

const TodoHeadTitle = tw.div`
    m-0 text-3xl font-bold
`

const TodoHeadSubTitle = tw.div`
    text-xl mt-2 text-gray-400
`

const TodoHeadContent = tw.div`
    text-lg mt-4
`

const TodoHead = () => {
    return (
        <TodoHeadBlock>
            <TodoHeadTitle>2022년 12월 12일</TodoHeadTitle>
            <TodoHeadSubTitle>월요일</TodoHeadSubTitle>
            <TodoHeadContent>할 일 2개 남음</TodoHeadContent>
        </TodoHeadBlock>
    );
};

export default TodoHead;