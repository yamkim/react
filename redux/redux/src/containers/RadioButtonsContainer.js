import RaddioButtons from "../libs/RadioButtons";
import { useDispatch } from "react-redux";

function RadioButtonsContainer({
    dataList,
    setData,
    isChecked,
}) {
    const dispatch = useDispatch();
    const onSetData = (dataList, seq) => dispatch(setData(dataList, seq))
    return (
        <>
            <RaddioButtons
                dataList={dataList}
                setData={onSetData}
                isChecked={isChecked}/>
        </>
    );
}

export default RadioButtonsContainer;