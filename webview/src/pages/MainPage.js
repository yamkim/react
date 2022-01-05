import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import MoveNextPage from '../components/MoveNextPage';
import MovePrevHistory from '../components/MovePrevHistory';
import MovePrevPage from '../components/MovePrevPage';
import Page1 from './Page1';
import Page2 from './Page2';

function MainPage(){
    const location = useLocation();
    const data = location.state?.bar;
    const history = useHistory();
    const [page, setPage] = useState('main')

    if (page === 'page1') {
        return (
            <Page1
                setPage={setPage}/>
        );
    } else if (page === 'page2') {
        return (
            <Page2
                setPage={setPage}/>
        );
    }

    return (
        <>
            <div>
                <h1>Main Page</h1>
                <div>
                    index page에서 가져온 값: 
                </div>
                <div>
                    {data}                
                </div>
                <MovePrevHistory
                    history={history}>
                    이전 페이지
                </MovePrevHistory>
                <MoveNextPage
                    nextPage="page1"
                    setPage={setPage}>
                    다음 페이지
                </MoveNextPage>
            </div>
        </>
    )
}


export default MainPage;