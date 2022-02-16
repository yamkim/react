import React from "react";
import MoveNextPage from "../components/MoveNextPage";
import MovePrevPage from "../components/MovePrevPage";

function InputPage({
    setPage,
    name,
    phone,
    onChange
}) {
    console.log("InputPage")
    const styleInputPair = {
        display: "flex",
    }

    return (
        <>
            <h1> Input Page 입니다. </h1>
            <div>
                사용자의 이름과 번호를 입력해주세요.
            </div>
            <div style={styleInputPair}>
                <input
                    name="name"
                    type="text"
                    placeholder="이름"
                    onChange={onChange}
                    value={name}/>
                    {name && (
                        <div className="call-style">님</div>
                    )}
            </div>
            <div>
                <input
                    name="phone"
                    type="text"
                    placeholder="번호"
                    onChange={onChange}
                    value={phone}/>
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