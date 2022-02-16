import React from 'react';

function MoveNextPage({
    nextPage,
    setPage,
    children,
}) {
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
