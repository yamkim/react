import React from 'react';
import { useHistory } from 'react-router'

function CompletePage(){
    const history = useHistory();
    return (
        <>
        <div>
            결제 성공 페이지입니다.
        </div>
        <div>
            <button
                onClick={() => {
                    history.push('/');
                }}>
                홈으로
            </button>
        </div>
        </>
    )
}

export default CompletePage;