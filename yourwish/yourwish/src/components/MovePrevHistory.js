import React from 'react';
import { useEffect, useState } from 'react';

function MovePrevHistory({
    history,
    children,
}) {
    const [block, setBlock] = useState(true)

    useEffect(() => {
        if (history) {
            if (block) {
                const preventGoBack = () => {
                    window.history.forword();
                };
                window.addEventListener('popstate', preventGoBack);
                return () => window.removeEventListener('popstate', preventGoBack);
            }
        }
    }, [block]);   

    function goBack() {
        setBlock(false);
        history.goBack();
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

export default MovePrevHistory;
