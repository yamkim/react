import React from "react";
import MoveNextHistory from "../components/MoveNextHistory";
// useNaviage 참고링크:
// https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC
import { useHistory } from 'react-router'

function IndexPage() {
    const history = useHistory();
    return (
        <>
            <h1> Index Page 입니다. </h1>
            <MoveNextHistory
                history={history}
                nextPage="/login"
            >
                로그인 페이지로
            </MoveNextHistory>

        </>
    )
}

export default IndexPage;