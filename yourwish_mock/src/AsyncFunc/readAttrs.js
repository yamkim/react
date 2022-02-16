import axios from 'axios';

export const readAttrs = async () => {
    const accessToken = localStorage.getItem('access_token');
    const endPoint = `${process.env.REACT_APP_SERVER_DOMAIN}/attrs`;
    const response = await axios({
        url: endPoint,
        method: 'get',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
}