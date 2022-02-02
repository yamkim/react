import React, { useEffect, useReducer, useState } from "react";
import MovePrevHistory from "../components/MovePrevHistory";
import { useHistory } from "react-router";
import isLogined from "../libs/isLogined"

function LoginPage() {
    const history = useHistory();
    let timeout;
    if (isLogined(false)) {
        history.push('/main')
    }
    const getAuthCodeFromKakao = () => {
        try {
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init(`${process.env.REACT_APP_JAVASCRIPT_KEY}`);
                window.Kakao.isInitialized();
            }
            window.Kakao.Auth.authorize({
                redirectUri: `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`,
            });
        } catch (e) {
            console.log(e)
        }
        timeout = setTimeout(() => {
            if (!window.Kakao.Auth.getAccessToken()) {
                let endPoint = 'https://kauth.kakao.com/oauth/authorize';
                endPoint += `?client_id=${process.env.REACT_APP_KAKAO_CLIENT_SECRET}`;
                endPoint += `&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
                endPoint += '&response_type=code';
                window.location.assign(endPoint);
            }
        }, 1000);
    };
    return (
        <>
            <h1> 로그인 페이지입니다. </h1>
            <div>
                <MovePrevHistory
                    history={history}>
                    이전 페이지
                </MovePrevHistory>
                <button
                    onClick={getAuthCodeFromKakao}>
                    카카오로그인
                </button>
            </div>
        </>
    )
}

export default LoginPage;