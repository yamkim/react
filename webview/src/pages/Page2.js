import React from 'react';
import { useHistory, useLocation } from 'react-router';
import MoveNextHistory from '../components/MoveNextHistory';
import MovePrevPage from '../components/MovePrevPage';

function Page2({
    setPage,
}){
    const history = useHistory();
    const location = useLocation();
    // console.log("history stack===============");
    // console.log(history);
    // console.log("location ===================");
    // console.log(location);

    return (
        <>
            <div>
                <h1>Page2 입니다.</h1>
                <div>
                    <MovePrevPage
                        prevPage="page1"
                        setPage={setPage}>
                        이전 페이지
                    </MovePrevPage>
                    <MoveNextHistory
                        history={history}
                        nextPage="/payment">
                        다음 페이지
                    </MoveNextHistory>
                </div>
            </div>
        </>
    )
}


export default Page2;