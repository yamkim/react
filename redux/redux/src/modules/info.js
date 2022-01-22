const SET_GENDER = 'info/SET_GENDER';
const SET_AGE = 'info/SET_AGE';
const SET_PRICE = 'info/SET_PRICE';

const initState = {
    gender: '',
    genderIdx: 0,
    age: '',
    ageIdx: 0,
    price: '',
    priceIdx: 0,
};


const getFoundValue = (attrList, seq) => {
    const found = attrList.find((el) => {
        return el.seq === seq;
    });
    return {
        'value': found.value,
        'seq': found.seq
    };
}

export function setGender(attrList, seq){
    const found = getFoundValue(attrList, seq);
    return ({
        type: SET_GENDER,
        gender: found.value,
        genderIdx: found.seq,
    })
}

export function setAge(attrList, seq) {
    const found = getFoundValue(attrList, seq);
    return ({
        type: SET_AGE,
        age: found.value,
        ageIdx: found.seq,
    })
}

export function setPrice(attrList, seq) {
    const found = getFoundValue(attrList, seq);
    return({
        type: SET_PRICE,
        price: found.value,
        priceIdx: found.seq,
    })
}

export default function info(state = initState, action) {
    switch (action.type) {
        case SET_GENDER:
            return {
                ...state,
                gender: action.gender,
                genderIdx: action.genderIdx,
            }
        case SET_AGE:
            return {
                ...state,
                age: action.age,
                ageIdx: action.ageIdx,
            }
        case SET_PRICE:
            return {
                ...state,
                price: action.price,
                priceIdx: action.priceIdx,
            }
        default:
            return state;
    }
}
