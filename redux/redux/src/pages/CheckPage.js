import React from "react";

function CheckPage({
    name,
    phone,
    selector,
    setPage,
}) {

    return (
        <>
            <h1> Check Page 입니다. </h1>
            <ul>
                <li>
                    {name}
                </li>
                <li>
                    {phone}
                </li>
                <li>
                    {selector.gender}
                </li>
                <li>
                    {selector.age}
                </li>
                <li>
                    {selector.price}
                </li>
            </ul>
        </>
    )
}

export default CheckPage;