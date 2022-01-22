import RaddioButtons from "../libs/RadioButtons";

function Info({
    dataList,
    setData,
    isChecked,
}) {
    return (
        <>
            <RaddioButtons
                dataList={dataList}
                setData={setData}
                isChecked={isChecked}/>
        </>
    );
}

export default Info;