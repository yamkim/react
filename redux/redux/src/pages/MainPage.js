import React, { useReducer, useState } from "react";
import MoveNextPage from "../components/MoveNextPage";
import InputPage from "./InputPage";
import InfoPage from "./InfoPage";
import { useNavigate } from "react-router";
import MovePrevNavigate from "../components/MovePrevNavigate";
import useInputs from "../hooks/useInputs";
import CheckPage from "./CheckPage";
import { useSelector } from "react-redux";


function MainPage() {
    const [page, setPage] = useState('main_page');
    const navigate = useNavigate();
    const [{name, phone}, onChange, reset] = useInputs({
        name: '',
        phone: '',
    });
    const { info } = useSelector(state => ({
        info: state.info,
    }));

    console.log("info 값===============================")
    console.log(info)

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
                setPage={setPage}/>
        )
    } else if (page === 'check_page') {
        return (
            <CheckPage
                name={name}
                phone={phone}
                info={info}
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