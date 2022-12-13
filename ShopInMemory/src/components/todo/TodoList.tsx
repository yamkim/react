import React from "react";
import tw, { css } from "twin.macro";
import TodoItem from "./TodoItem";

const TodoListBlock = tw.div`
  flex flex-col
  py-2 px-6
`

const TodoList = () => {
    return (
        <TodoListBlock >
            <TodoItem
                id={1}
                text="프로젝트 생성하기"
                isDone={true}
            />
            <TodoItem
                id={2}
                text="프로젝트 생성하기"
                isDone={false}
            />
        </TodoListBlock>
    );
};

export default TodoList;