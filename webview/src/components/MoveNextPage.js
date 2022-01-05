import React from 'react';
import { useState, useEffect } from 'react';

function MoveNextPage({
    nextPage,
    setPage,
    children,
}) {
    const [block, setBlock] = useState(true)

    // useEffect(() => {
    //     if (block) {
    //         const preventGoBack = () => {
    //             history.go(-1);
    //         };
    //         window.addEventListener('popstate', preventGoBack);
    //         return () => window.removeEventListener('popstate', preventGoBack);
    //     }
    // }, [block]);   

    function goNext () {
        setPage(nextPage);
    }

    return (
        <>
            <button
                onClick={goNext}>
                {children}
            </button>
        </>
    );
}

export default MoveNextPage;
