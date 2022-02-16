import { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';

function reducer(state, action) {
    switch (action.type) {
    case 'LOADING':
        return {
            loading: true,
            data: null,
            error: null,
        };
    case 'SUCCESS':
        return {
            loading: false,
            data: action.data,
            error: null,
        };
    case 'ERROR':
        return {
            loading: false,
            data: null,
            error: action.error,
        };
    default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function useAsync(callback, deps = [], callbackParam = null) {
    // const history = useHistory();
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: false,
    });
    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback(callbackParam);
            console.log("THIS IS USEASYNC====================")
            dispatch({ type: 'SUCCESS', data: data });
        } catch (err) {
            if (err.response.status === 419) {
                return (
                    <Link to='/auths/token/refresh'/>
                )
            } else if (err.response.status === 500) {
                alert('서버 오류입니다.')
                return (
                    <Link to='/'/>
                )
            } else {
                return (
                    <Link to='/main'/>
                )
            }
            // if (err.response.status === 419) {
            //     history.push('/auths/token/refresh');
            // }
            // dispatch({ type: 'ERROR', error: err });
        }
    };
    useEffect(() => {
        fetchData();
    }, deps);
    return [state, fetchData];
}

export default useAsync;