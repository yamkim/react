import React from 'react';

function JsChannelEx(){
    function onClick() {
        const text = "flutter로 text가 전달됩니다."
        window.sendBack(text);
    }
    return (
        <div>
            <button
                type="button"
                onClick={onClick}>
                리액트에서
            </button>
        </div>
    )
}

export default JsChannelEx;