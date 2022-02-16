import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import useAsync from '../hooks/useAsync';

async function readTokens({ code, sns }) {
    const endPoint = `${process.env.REACT_APP_SERVER_DOMAIN}/auths/login/${sns}`;
    try {
        const response = await axios.get(
            endPoint, {
                headers: {
                    'Authorization-Code': code,
                },
            },
        );
        return response.data;
    } catch (err) {
        if (err.response.status === 400) {
            throw new Error('reprompt');
        } else {
            throw new Error('serverError');
        }
    }
}

function HandleSnsLogin({ sns }) {
    const code = new URL(window.location.href).searchParams.get('code');
    const history = useHistory();
    const [state, refetch] = useAsync(readTokens, [], { code: code, sns: sns });
    const { loading, data, error } = state;
    if (loading) {
        return <></>;
    }
    if (error) {
        console.log(error);
        if (error.message === 'reprompt') {
            const stateString = Math.random().toString(36).substring(2, 15);
            let redirEndPoint = 'https://nid.naver.com/oauth2.0/authorize';
            redirEndPoint += '?response_type=code';
            redirEndPoint += `&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}`;
            redirEndPoint += `&state=${stateString}`;
            redirEndPoint += `&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;
            redirEndPoint += '&auth_type=reprompt'; window.location.assign(redirEndPoint);
        } else {
            alert('로그인 에러입니다.')
            history.push('/login');
        }
        return (
            <></>
        );
    }
    if (data) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('user_name', data.user.user_name);
        localStorage.setItem('user_phone', data.user.user_phone);
        history.push({
            pathname: '/main',
        });
    }
    return (
        <></>
    );
}

export default HandleSnsLogin;