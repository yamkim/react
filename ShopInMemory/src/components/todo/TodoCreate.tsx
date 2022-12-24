import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { IoAdd } from 'react-icons/io5';
import { useTodoDispatch } from "./TodoContext";

type Props = {
  id: number;
  text: string;
  isDone: boolean;
}

const CreateWrapper = tw.div`
  flex flex-col justify-end w-full
  h-2/5 max-sm:h-[150px]
  p-10 max-sm:p-5
  box-border
`

const InsertFormPositioner = tw.div`
  relative w-full
  h-1/2
  max-sm:h-full
`

const InsertForm = tw.form`
  border-2 
  top-0
  p-5
  bg-gray-200
`

const Input = tw.input`
  border-2
  w-full
  outline-none
  p-2
  rounded-md
`

const ButtonContainer = tw.div`
  relative w-full
  h-1/2
  p-2
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
  const [text, setText] = useState<string>('');

  const dispatch = useTodoDispatch();

  const onToggle = () => setOpen(!open);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 새로고침 방지
    dispatch?.({
      type: 'CREATE',
      text: text,
    });

    setText('');
    setOpen(false);
  }


  return (
    <CreateWrapper>
      {open && (
        <InsertFormPositioner onSubmit={onSubmit}>
          <InsertForm>
            <Input
              autoFocus
              onChange={onChange}
              placeholder="할 일을 입력 후, Enter를 누르세요"
              value={text}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <ButtonContainer>
        <CircleButton onClick={onToggle} $isOpen={open}>
          <IoAdd />
        </CircleButton>
      </ButtonContainer>
    </CreateWrapper>
  );
};

export default TodoCreate;