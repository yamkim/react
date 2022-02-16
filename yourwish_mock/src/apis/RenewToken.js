import React from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import useAsync from '../hooks/useAsync';

async function renewTokens() {
    const refreshToken = localStorage.getItem('refresh_token');
    const endPoint = `${process.env.REACT_APP_SERVER_DOMAIN}/auths/token/refresh`;
    const response = await axios({
        url: endPoint,
        method: 'get',
        headers: {
            Authorization: `Bearer ${refreshToken}`,
        },
    });
    return response.data;
}

function RenewTokens() {
    const history = useHistory();
    const [state, refetch] = useAsync(renewTokens, []);
    const { loading, data, error } = state;
    if (loading) {
        return <div/>;
    }
    if (error) {
        if (error.response.status === 401) {
            localStorage.setItem('access_token', '');
            localStorage.setItem('refresh_token', '');
            alert("로그인 유지시간을 초과했습니다.")
            history.push({
                pathname: '/login',
            });
        } else {
            localStorage.setItem('access_token', '');
            localStorage.setItem('refresh_token', '');
            alert("네트워크 오류입니다.")
            history.push({
                pathname: '/login',
            });
        }
        return (
            <></>
        );
    }
    if (data) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        alert('토큰을 갱신했습니다.')
        history.push({
            pathname: '/main',
        });
    }
    return (
        <></>
    );
}

export default RenewTokens;