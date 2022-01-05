import { useHistory, useLocation } from 'react-router';
import MoveNextPage from '../components/MoveNextPage';
import MovePrevPage from '../components/MovePrevPage';

function Page1({
    setPage,
}){
    const history = useHistory();
    const location = useLocation();
    // console.log("history stack===============");
    // console.log(history);
    // console.log("location ===================");
    // console.log(location);
    return (
        <>
            <div>
                <h1>Page1 입니다.</h1>
                <div>
                    <MovePrevPage
                        prevPage="main"
                        setPage={setPage}>
                        이전 페이지
                    </MovePrevPage>
                    <MoveNextPage
                        nextPage="page2"
                        setPage={setPage}>
                        다음 페이지
                    </MoveNextPage>
                </div>
            </div>
        </>
    )
}


export default Page1;