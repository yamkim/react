import React from 'react';

function MoveNextPage({
    nextPage,
    setPage,
    children,
}) {
    console.log("MoveNextPage")
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
