// reference: https://github.com/iamport/iamport-react-example
import React from 'react';
import useAsync from '../hooks/useAsync';

// TODO: url 통일해서 post로 요청하는 부분을 get으로 요청하기
const callback = async () => {
    alert('모바일 환경에서 결제해주세요');
};

async function createPayment() {
    const endPoint = `${process.env.REACT_APP_SERVER_DOMAIN}/payments/complete/mobile`;
    const nowDate = new Date;
    const orderInfo = {
        order_seq: 1,
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: `YOURWISH_${nowDate}`,
        buy_addr: '집',
        buyer_postcode: 12345,
        m_redirect_url: endPoint,
        buyer_email: 'yeham.kim@yourwish.co.kr'
    }
    
    window.IMP.init(process.env.REACT_APP_IMP_CODE);
    const amount = 100;
    if (!amount) {
        alert('결제 금액이 잘못되었습니다 💸');
        window.location.assign('/');
        return;
    }
    const rsp = {
        pg: orderInfo.pg,
        pay_method: orderInfo.pay_method,
        merchant_uid: orderInfo.merchant_uid,
        name: `${amount}원대 추천 상품`,
        amount: amount,
        buyer_email: orderInfo.buyer_email,
        buyer_name: '보내미',
        buyer_tel: '010-1111-2222',
        buyer_addr: '집',
        buyer_postcode: '12345',
        m_redirect_url: `${process.env.REACT_APP_SERVER_DOMAIN}/payments/complete/mobile`,
    };
    console.log("rsp:=============", rsp);
    window.IMP.request_pay(rsp, callback);
}

function CreatePayment() {
    console.log('Here is CreatePayment Component');
    const [state, refetch] = useAsync(createPayment, [], );
    const { loading, data, error } = state;

    if (loading) {
        // window.location.assign('/main');
        return (<div/>);
    }
    if (error) {
        alert('[DEBUG] error part');
        window.location.assign('/');
    }
    if (data) {
        alert('[DEBUG] data part');
        window.location.assign('/');
    }
    return (
        <div/>
    );
}

export default CreatePayment;
