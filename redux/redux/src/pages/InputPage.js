import React from "react";
import MoveNextPage from "../components/MoveNextPage";
import MovePrevPage from "../components/MovePrevPage";

function InputPage({
    setPage,
    name,
    phone,
    onChange
}) {

    return (
        <>
            <h1> Input Page 입니다. </h1>
            <div>
                사용자의 이름과 번호를 입력해주세요.
            </div>
            <div>
                <input
                    name="name"
                    type="text"
                    plcaeholder="이름"
                    onChange={onChange}
                    value={name}>
                </input>
            </div>
            <div>
                <input
                    name="phone"
                    type="text"
                    plcaeholder="번호"
                    onChange={onChange}
                    value={phone}>
                </input>
            </div>
            <div>
                <MovePrevPage
                    prevPage="main_page"
                    setPage={setPage}>
                    이전 페이지
                </MovePrevPage>
                <MoveNextPage
                    nextPage="info_page"
                    setPage={setPage}>
                    다음 페이지
                </MoveNextPage>
            </div>
        </>
    )
}

export default InputPage;