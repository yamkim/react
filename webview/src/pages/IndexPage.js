import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

function IndexPage(){
    const history = useHistory();
    const location = useLocation();
    console.log("history stack===============");
    console.log(history);
    console.log("location ===================");
    console.log(location);
    const [data, setData] = useState();
    const getValueFromFlutter = () => {
        window.flutter_inappwebview.callHandler('handlerFoo').then(function(result) {
            setData(result?.foo)
        })
    }

    return (
        <>
        <div>
            <h1>JavaScript Handlers</h1>
            Index Page입니다.
            <div>
                <label>flutter에서 값 가져오기</label>
                <button
                    onClick={getValueFromFlutter}>
                    버튼
                </button>
                <div>
                    {data}
                </div>
                <button
                    onClick={() => {
                        history.push({
                            pathname: "/main",
                            state: {"bar": "bar"}
                        })
                    }}>
                    메인 페이지로
                </button>
            </div>
        </div>
        </>
    )
}


export default IndexPage;