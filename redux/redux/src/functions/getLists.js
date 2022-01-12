export const getLists = () => {
    const genderList = [{
        seq: '1',
        value: '전체'
    }, {
        seq: '2',
        value: '남자'
    }, {
        seq: '3',
        value: '여자'
    }];

    const ageList = [{
        seq: '1',
        value: '20-24세'
    }, {
        seq: '2',
        value: '25-29세'
    }, {
        seq: '3',
        value: '30-34세'
    }, {
        seq: '4',
        value: '35-39세'
    }, {
        seq: '5',
        value: '40-44세'
    }, {
        seq: '6',
        value: '45세 이상'
    }];

    const priceList = [{
        seq: '1',
        value: '15000'
    }, {
        seq: '2',
        value: '20000'
    }, {
        seq: '3',
        value: '25000'
    }, {
        seq: '4',
        value: '30000'
    }, {
        seq: '5',
        value: '35000'
    }, {
        seq: '6',
        value: '40000'
    }];

    return [genderList, ageList, priceList];
}