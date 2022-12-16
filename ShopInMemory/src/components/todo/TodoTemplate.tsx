import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import React from "react";
import tw, { css } from "twin.macro";

type Props = {
  children: EmotionJSX.Element[];
}

const TemplateWrapper = tw.div`
    flex flex-row justify-center
    px-4 py-4
    xl:px-14
`

const TodoListContainer = tw.div`
    flex flex-col
    w-[512px] bg-white
    h-[768px]
    max-sm:h-[600px]
    border-2 border-gray-200 rounded-3xl shadow-lg
`

const TodoTemplate = ({ children }: Props) => {
  return (
    <TemplateWrapper>
      <TodoListContainer>
        {children}
      </TodoListContainer>
    </TemplateWrapper>
  );
};

export default TodoTemplate;