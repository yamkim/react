const isLogined = (showAlert = true) => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken && showAlert) {
        alert('로그인을 먼저 해주세요');
    }
    return (!!accessToken);
};
export default isLogined;