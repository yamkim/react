import React from 'react';
import { useEffect, useState } from 'react';

function MovePrevNavigate({
    navigate,
    children,
}) {
    const [block, setBlock] = useState(true)

    useEffect(() => {
        if (navigate) {
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
        navigate(-1);
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

export default MovePrevNavigate;
