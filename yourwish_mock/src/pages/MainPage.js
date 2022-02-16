import React, { useEffect, useReducer, useState } from "react";
import MoveNextPage from "../components/MoveNextPage";
import InputPage from "./InputPage";
import SelectorPage from "./SelectorPage";
import { useHistory } from 'react-router';
import useInputs from "../hooks/useInputs";
import CheckPage from "./CheckPage"; import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { readAttrs } from "../AsyncFunc/readAttrs"
import useAsync from "../hooks/useAsync";

function MainPage() {
    const [page, setPage] = useState('main_page');
    // NOTE: readAttrs는 한 번만 랜더링됩니다.
    const [state, refetch] = useAsync(readAttrs, [], null);
    const attrs = state.data?.attrs;

    const [{name, phone}, onChange, reset] = useInputs({
        name: '',
        phone: '',
    });
    const { selector } = useSelector(state => ({
        selector: state.selector,
    }));
    console.log("MainPage")

    // MainPage가 렌더링될 때, dataList들을 받아와야합니다.
    if (page === 'input_page') {
        return (
            <InputPage
                name={name}
                phone={phone}
                onChange={onChange}
                setPage={setPage} />
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
                <Link to="/">
                    인덱스 페이지로
                </Link>
                {attrs && (
                    <MoveNextPage
                        nextPage="input_page"
                        setPage={setPage}>
                        다음 페이지
                    </MoveNextPage>
                )}
            </div>
        </>
    )
}

export default MainPage;