import React from "react";
import Info from "../components/Info";
import MoveNextPage from "../components/MoveNextPage";
import MovePrevPage from "../components/MovePrevPage";
import { getLists } from "../functions/getLists";
import { useDispatch } from "react-redux";
import { setGender, setAge, setPrice } from '../modules/info'

function InfoPage({
    info,
    setPage,
}) {

    const [genderList, ageList, priceList] = getLists();

    const dispatch = useDispatch();
    const onSetGender = (attrList, seq) => dispatch(setGender(attrList, seq));
    const onSetAge = (attrList, seq) => dispatch(setAge(attrList, seq));
    const onSetPrice = (attrList, seq) => dispatch(setPrice(attrList, seq));

    return (
        <>
            <h1> Info Page 입니다. </h1>
            <Info
                dataList={genderList}
                setData={onSetGender}
                isChecked={info.genderIdx}>
            </Info>
            <Info
                dataList={ageList}
                setData={onSetAge}
                isChecked={info.ageIdx}>
            </Info>
            <Info
                dataList={priceList}
                setData={onSetPrice}
                isChecked={info.priceIdx}>
            </Info>

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