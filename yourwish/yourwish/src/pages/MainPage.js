import React, { useEffect, useReducer, useState } from "react";
import MoveNextPage from "../components/MoveNextPage";
import InputPage from "./InputPage";
import SelectorPage from "./SelectorPage";
import { useHistory } from 'react-router';
import MovePrevNavigate from "../components/MovePrevHistory";
import useInputs from "../hooks/useInputs";
import CheckPage from "./CheckPage";
import { useSelector } from "react-redux";

function MainPage() {
    const [page, setPage] = useState('main_page');
    const history = useHistory();
    const [{name, phone}, onChange, reset] = useInputs({
        name: '',
        phone: '',
    });
    const { selector } = useSelector(state => ({
        selector: state.selector,
    }));

    // MainPage가 렌더링될 때, dataList들을 받아와야합니다.
    console.log("selector 값===============================")
    console.log(selector)

    if (page === 'input_page') {
        return (
            <InputPage
                name={name}
                phone={phone}
                onChange={onChange}
                setPage={setPage}
                />
        )
    } else if (page === 'info_page') {
        return (
            <SelectorPage
                selector={selector}
                setPage={setPage}/>
        )
    } else if (page === 'check_page') {
        return (
            <CheckPage
                name={name}
                phone={phone}
                selector={selector}
                setPage={setPage}/>
        )
    }
    return (
        <>
            <h1> Main Page 입니다. </h1>
            <div>
                <MovePrevNavigate
                    history={history}>
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