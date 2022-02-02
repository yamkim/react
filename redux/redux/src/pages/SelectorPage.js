import React from "react";
import RadioButtonsContainer from "../containers/RadioButtonsContainer";
import MoveNextPage from "../components/MoveNextPage";
import MovePrevPage from "../components/MovePrevPage";
import { getLists } from "../functions/getLists";
import { setGender, setAge, setPrice } from '../modules/selector'

function SelectorPage({
    selector,
    setPage,
}) {

    const [genderList, ageList, priceList] = getLists();

    return (
        <>
            <h1> Selector Page 입니다. </h1>
            <RadioButtonsContainer
                dataList={genderList}
                setData={setGender}
                isChecked={selector.genderIdx}>
            </RadioButtonsContainer>
            <RadioButtonsContainer
                dataList={ageList}
                setData={setAge}
                isChecked={selector.ageIdx}>
            </RadioButtonsContainer>
            <RadioButtonsContainer
                dataList={priceList}
                setData={setPrice}
                isChecked={selector.priceIdx}>
            </RadioButtonsContainer>
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

export default SelectorPage;