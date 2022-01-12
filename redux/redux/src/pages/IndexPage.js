import React from "react";
import MoveNextNavigate from "../components/MoveNextNavigate";
// useNaviage 참고링크:
// https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC
import { useNavigate } from 'react-router-dom'

function IndexPage() {
    const navigate = useNavigate();
    return (
        <>
            <h1> Index Page 입니다. </h1>
            <MoveNextNavigate
                navigate={navigate}
                nextPage="/main"
            >
                main page로
            </MoveNextNavigate>

        </>
    )
}

export default IndexPage;