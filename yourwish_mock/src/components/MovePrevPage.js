import React from 'react';

function MovePrevPage({
    prevPage,
    setPage,
    children,
}) {
    console.log("MovePrevPage")
    function goBack() {
        setPage(prevPage);
    }

    return (
        <>
            <button
                onClick={goBack}>
                {children}
            </button>
        </>
    );
}

export default MovePrevPage;
