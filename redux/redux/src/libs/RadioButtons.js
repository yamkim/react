import React from "react";

function RaddioButtons({
    dataList,
    isChecked,
    setData,
}) {
    const radioBtnStyle = {
        display: 'flex',
    }
    const onChange = (e) => {
        setData(dataList, e.target.value);
    };
    return (
        <div style={radioBtnStyle}>
            {
                dataList.map((cand, idx) => {
                    return (
                        <div key={idx}>
                            <input
                                type="radio"
                                id={cand.seq}
                                onChange={onChange}
                                checked={isChecked === cand.seq ? 'checked' : ''}
                                value={cand.seq}/>
                            <label
                                htmlFor={cand.seq}>
                                {cand.value}
                            </label>
                        </div>
                    );
                })
            }
        </div>
    )

}

export default RaddioButtons;