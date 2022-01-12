import React from "react";
import MoveNextPage from "../components/MoveNextPage";
import MovePrevPage from "../components/MovePrevPage";
import { getLists } from "../functions/getLists";
import RaddioButtons from "../libs/RadioButtons";

function InfoPage({
    setPage,
    info,
    dispatch,
}) {

    const [genderList, ageList, priceList] = getLists();

    const setGender = (seq) => {
        const found = genderList.find((el) => {
            return el.seq === seq;
        });
        dispatch({
            type: 'SET_GENDER',
            gender: found.value,
            genderIdx: found.seq,
        })
    }

    const setAge = (seq) => {
        const found = ageList.find((el) => {
            return el.seq === seq;
        });
        dispatch({
            type: 'SET_AGE',
            age: found.value,
            ageIdx: found.seq,
        })
    }

    const setPrice = (seq) => {
        const found = priceList.find((el) => {
            return el.seq === seq;
        });
        dispatch({
            type: 'SET_PRICE',
            price: found.value,
            priceIdx: found.seq,
        })
    }

    return (
        <>
            <h1> Info Page 입니다. </h1>
            <RaddioButtons
                dataList={genderList}
                setData={setGender}
                isChecked={info.gender_idx}/>
            <RaddioButtons
                dataList={ageList}
                setData={setAge}
                isChecked={info.age_idx}/>
            <RaddioButtons
                dataList={priceList}
                setData={setPrice}
                isChecked={info.price_idx}/>
            <div>
                <MovePrevPage
                    prevPage="input_page"
                    setPage={setPage}>
                    이전 페이지
                </MovePrevPage>
                <MoveNextPage
                    nextPage="check_page"
                    setPage={setPage}>
                    다음 페이지
                </MoveNextPage>
            </div>
        </>
    )
}

export default InfoPage;