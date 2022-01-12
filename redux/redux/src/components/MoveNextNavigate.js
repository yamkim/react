import React from 'react';
import { useState, useEffect } from 'react';

function MoveNextNavigate({
    navigate,
    nextPage,
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
        setBlock(false);
        navigate(nextPage)
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

export default MoveNextNavigate;
