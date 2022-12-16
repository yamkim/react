import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { IoAdd } from 'react-icons/io5';

type Props = {
    id: number;
    text: string;
    isDone: boolean;
}

const CreateWrapper = tw.div`
    flex flex-col justify-end w-full h-2/5 p-10
    box-border
`

const InsertFormPositioner = tw.div`
    relative w-full h-1/2
`

const InsertForm = tw.form`
    border-2 
    p-5
    bg-gray-200
`

const Input = tw.input`
    border-2
    w-full
`

const ButtonContainer = tw.div`
    relative w-full h-1/2
`

interface CheckCircleProps {
    $isOpen: boolean
}
const CircleButton = tw.div<CheckCircleProps>`
    absolute right-0 bottom-0
    flex items-center justify-center

    bg-gray-200 hover:bg-gray-300
    w-14 h-14
    rounded-full

    text-4xl text-center

    cursor-pointer

    ${(props) => (
        props.$isOpen && `
            bg-red-100 hover:bg-red-200
            rotate-45
        `
    )}
`

const TodoCreate = () => {
    const [open, setOpen] = useState<boolean>(false);

    const onToggle = () => setOpen(!open);

    return (
        <CreateWrapper>
            {open && (
                <InsertFormPositioner>
                    <InsertForm>
                        <Input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요"/>
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <ButtonContainer>
                <CircleButton onClick={onToggle} $isOpen={open}>
                    <IoAdd/>
                </CircleButton>
            </ButtonContainer>
        </CreateWrapper>
    );
};

export default TodoCreate;