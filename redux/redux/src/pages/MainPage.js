import React, { useReducer, useState } from "react";
import MoveNextPage from "../components/MoveNextPage";
import InputPage from "./InputPage";
import InfoPage from "./InfoPage";
import { useNavigate } from "react-router";
import MovePrevNavigate from "../components/MovePrevNavigate";
import useInputs from "../hooks/useInputs";
import CheckPage from "./CheckPage";

const initInfo = {
    gender: '',
    gender_idx: 0,
    age: '',
    age_idx: 0,
    price: '',
    price_idx: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_GENDER':
            return {
                ...state,
                gender: action.gender,
                gender_idx: action.genderIdx,
            }
        case 'SET_AGE':
            return {
                ...state,
                age: action.age,
                age_idx: action.ageIdx,
            }
        case 'SET_PRICE':
            return {
                ...state,
                price: action.price,
                price_idx: action.priceIdx,
            }
        default:
            return state;
    }
}

function MainPage() {
    const [page, setPage] = useState('main_page');
    const navigate = useNavigate();
    const [{name, phone}, onChange, reset] = useInputs({
        name: '',
        phone: '',
    });
    const [info, dispatch] = useReducer(reducer, initInfo)

    console.log("info 정보==========================");
    console.log(info);

    if (page === 'input_page') {
        return (
            <InputPage
                setPage={setPage}
                name={name}
                phone={phone}
                onChange={onChange}/>
        )
    } else if (page === 'info_page') {
        return (
            <InfoPage
                info={info}
                dispatch={dispatch}
                setPage={setPage}/>
        )
    } else if (page === 'check_page') {
        return (
            <CheckPage
                info={info}
                name={name}
                phone={phone}
                dispatch={dispatch}
                setPage={setPage}/>
        )
    }

    return (
        <>
            <h1> Main Page 입니다. </h1>
            <div>
                <MovePrevNavigate
                    navigate={navigate}>
                    이전 페이지
                </MovePrevNavigate>
                <MoveNextPage
                    nextPage="input_page"
                    setPage={setPage}>
                    다음 페이지
                </MoveNextPage>
            </div>
        </>
    )
}

export default MainPage;