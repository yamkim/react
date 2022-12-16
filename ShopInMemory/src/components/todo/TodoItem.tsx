import React from "react";
// import tw, { css } from "twin.macro";
import tw from "tailwind-styled-components";
import { IoCheckmark, IoTrashSharp } from 'react-icons/io5';
import { useTodoDispatch } from "./TodoContext";

type Props = {
    id: number;
    text: string;
    isDone: boolean;
}

interface CheckCircleProps {
    $isDone: boolean
}
const CheckCircle = tw.div<CheckCircleProps>`
    flex w-7 h-7
    border-2 rounded-full
    text-xl items-center justify-center
    cursor-pointer
    mr-4
    ${(props) => (
        props.$isDone && `
            border-2
        `
    )}
`

const Text = tw.div`
    text-lg
    text-gray-600
    w-5/6
`

const Remove = tw.div`
    flex items-center justify-center
    text-xl
    hover:bg-gray-100
    cursor-pointer

    group-hover/item:visible
    group/trashcan invisible
`

const TodoItemBlock = tw.div`
    flex items-center py-4
    justify-start
    px-6

    group/item
    hover:bg-slate-100
`

const TodoItem = ({id, text, isDone}: Props) => {
    const dispatch = useTodoDispatch();
    const onToggle = ()  => dispatch?.({ type: 'TOGGLE', id, isDone});
    const onRemove = () => dispatch?.({ type: 'REMOVE', id: id });
    return (
        <TodoItemBlock>
            <CheckCircle $isDone={true} onClick={onToggle}>
                {isDone && <IoCheckmark/>}
            </CheckCircle>
            <Text>
                {text}
            </Text>
            <Remove onClick={onRemove}>
                <IoTrashSharp className="group-hover/trashcan:visible"/>
            </Remove>
        </TodoItemBlock>
    );
};

export default TodoItem;