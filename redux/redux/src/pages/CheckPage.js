import React from "react";

function CheckPage({
    name,
    phone,
    info,
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
                    {info.gender}
                </li>
                <li>
                    {info.age}
                </li>
                <li>
                    {info.price}
                </li>
            </ul>
        </>
    )
}

export default CheckPage;