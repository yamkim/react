import React from "react";
import TodoTemplate from "../components/todo/TodoTemplate";
import TodoHead from "../components/todo/TodoHead";
import TodoList from "../components/todo/TodoList";
import TodoCreate from "../components/todo/TodoCreate";
import { TodoProvider } from "../components/todo/TodoContext";

const TodoPage = () => {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>

    </TodoProvider>
  );
};

export default TodoPage;