import React from "react";
import tw, { css } from "twin.macro";
import TodoTemplate from "../components/todo/TodoTemplate";
import TodoHead from "../components/todo/TodoHead";
import TodoList from "../components/todo/TodoList";

const TodoPage = () => {
    return (
        <>
            <TodoTemplate>
                <TodoHead />
                <TodoList />
            </TodoTemplate>
        </>
    );
};

export default TodoPage;