import React from "react";
import tw, { css } from "twin.macro";
import { useTodoState } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = tw.div`
  flex flex-col
  py-2 px-6
  h-3/5
  overflow-y-auto
`

const TodoList = () => {
  const todoList = useTodoState()
  return (
    <TodoListBlock >
      {todoList?.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isDone={todo.isDone}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;