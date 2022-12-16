import React, { useReducer, createContext, Dispatch, useContext, useRef } from 'react';

let nextId = 5;

type TodoState = {
  id: number;
  text: string;
  isDone: boolean;
}

export type TodoListState = TodoState[];

type TodoListAction =
  | { type: 'CREATE'; text: string; }
  | { type: 'TOGGLE'; id: number; isDone: boolean; }
  | { type: 'REMOVE'; id: number; }

type TodoDispatch = Dispatch<TodoListAction>;

function todoReducer(state: TodoListState, action: TodoListAction): TodoListState {
  switch (action.type) {
    case 'CREATE':
      return state.concat({
        id: nextId++,
        text: action.text,
        isDone: false,
      });
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'REMOVE':
      return state.filter(todo =>
        // payload 가 number 인 것이 .
        todo.id !== action.id
      );
    default:
      throw new Error('Unhandled action')
  }
}


const initialTodoState: TodoListState = [{
  id: 1,
  text: '프로젝트 생성하기',
  isDone: true
}, {
  id: 2,
  text: '컴포넌트 스타일링하기',
  isDone: true
}, {
  id: 3,
  text: 'Context 만들기',
  isDone: false
}, {
  id: 4,
  text: '기능 구현하기',
  isDone: false
}];


const TodoListStateContext = createContext<TodoListState | null>(null);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  return (
    <TodoListStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoListStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoListStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}