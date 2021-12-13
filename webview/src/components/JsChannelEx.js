import React from 'react';
import { useHistory } from 'react-router'

function JsChannelEx(){
    const history = useHistory();
    function sendDataToFlutter() {
        const text = "flutter로 text가 전달됩니다."
        alert("값이 전송되었습니다.");
        window.flutter_inappwebview.callHandler('flutterHandler', 'This is data from javascript.');
    }
    function openContactsInFlutter() {
        alert("주소록을 불러옵니다.");
        window.flutter_inappwebview.callHandler('openContacts', JSON.stringify(
            { isContactOpen: true }
        )).then(function(result) {
            // alert("주소록 주소록");
            alert(JSON.stringify(result));
        })
    }
    return (
        <>
        <div>
            <button
                onClick={() => {
                    history.push('/payment');
                }}>
                결제하기
            </button>
        </div>
        <br/>
        <br/>
        <div>
            <button
                onClick={openContactsInFlutter}>
                주소록 불러오기
            </button>
        </div>
        </>
    )
}

export default JsChannelEx;