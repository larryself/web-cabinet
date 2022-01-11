const getInputNumbersValue = (value) => {
    return value.replace(/\D/g, '');
}
const amountValidation = (value) => {
    return value.slice(0, 9).split('').map((num, i, arr) => {
        if ((arr.length - 1 - i) % 3 === 0 && i !== arr.length - 1) {
            return num + ' ';
        }
        return num;
    }).join('');
}
const phoneValidation = (value) => {
    let formattedInputValue = "";
    if(['7','8','9',].includes(value[0])){
        if(value[0] === '9') formattedInputValue = `+7 (${value[0]}`;
        if(value[0] === '7') formattedInputValue = `+7 (`;
        if(value[0] === '8') formattedInputValue = `8 (`;
    }
    if(value.length > 1) formattedInputValue += value.slice(1,4)
    if(value.length > 4) formattedInputValue += ') ' + value.slice(4,7) ;
    if(value.length > 7) formattedInputValue += '-' + value.slice(7,9);
    if(value.length > 9) formattedInputValue += '-' + value.slice(9,11) ;
    return formattedInputValue;
}
const maskValidate = (event, name) => {
    const input = event.target;
    const selectionStart = input.selectionStart;
    const selectionEnd = input.selectionEnd;
    const inputValue = getInputNumbersValue(input.value);
    let formattedValue;
    switch (name) {
        case 'phoneNumber':
            formattedValue = phoneValidation(inputValue);
            break;
        case 'amountPay':
            formattedValue = amountValidation(inputValue);
            break;
        default:
            break;
    };
    if (input.value.length !== selectionStart && name === 'phoneNumber') {
        input.value = formattedValue;
        if([7,8,12,15].includes(selectionStart)){
            if(selectionStart === 7 || selectionStart === 8 ) {
                input.selectionStart = 9;
                input.selectionEnd = 9;
            }
            if (selectionStart === 12) {
                input.selectionStart = 13;
                input.selectionEnd = 13;
            }
            if(selectionStart === 15) {
                input.selectionStart = 16;
                input.selectionEnd = 16;
            }
        } else {
            input.selectionStart = selectionStart;
            input.selectionEnd = selectionEnd;
        }
        return;
    }
    if(input.value.length !== selectionStart && name === 'amountPay' ){
        input.value = formattedValue;

        return;
    }
    input.value = formattedValue;


};
export default maskValidate;