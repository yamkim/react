import { useState, useCallback } from 'react';

const autoHypenPhone = (str) => {
    str = str.replace(/[^0-9]/g, '');
    let tmp = '';
    if (str.length < 4) {
        tmp = str;
    } else if (str.length < 7) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
    } else if (str.length < 11) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
    } else {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
    }
    str = tmp;
    return str;
};

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    const onChange = (e) => {
        const { name, value } = e.target;
        let inputVal = value;
        if (name === 'phone') {
            const regex = /^[0-9\b -]{0,13}$/;
            if (regex.test(inputVal) && inputVal.length <= 13) {
                inputVal = autoHypenPhone(inputVal);
                setForm({
                    ...form,
                    [name]: inputVal,
                });
            }
        } else if (name === 'name') {
            const modifiedName = inputVal.replace(/님$/, '');
            setForm({
                ...form,
                [name]: modifiedName,
            });
        } else {
            setForm({
                ...form,
                [name]: inputVal,
            });
        }
    };

    const reset = useCallback(() => {
        setForm(initialForm);
    }, [initialForm]);
    return [form, onChange, reset];
}

export default useInputs;