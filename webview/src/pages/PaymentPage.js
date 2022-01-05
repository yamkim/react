import React from 'react';
import { useHistory, useLocation } from 'react-router';
import MovePrevHistory from '../components/MovePrevHistory';

function PaymentPage() {
    const history = useHistory();
    const location = useLocation();
    console.log("history stack===============");
    console.log(history);
    console.log("location ===================");
    console.log(location);
    // const setPage = location.state.setPage;

    return (
        <>
            <div>
                <h1>PaymentPage 입니다.</h1>
                <div>
                    <MovePrevHistory
                        history={history}>
                        이전 페이지
                    </MovePrevHistory>
                    <button
                        onClick={() => {
                            history.push('/');
                        }}>
                        시작 페이지로(history.push)
                    </button>
                </div>
            </div>
        </>
    )
}


export default PaymentPage;