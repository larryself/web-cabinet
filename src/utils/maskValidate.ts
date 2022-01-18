enum NAME {
  PHONE_NUMBER = 'phoneNumber',
  AMOUNT_PAY = 'amountPay',
}

const getInputNumbersValue = (value: string): string => {
  return value.replace(/\D/g, '');
};
const amountValidation = (value: string): string => {
  const valueToNum = +value;
  let formattedInputValue = '';
  formattedInputValue = String(valueToNum)
    .slice(0, 7)
    .split('')
    .map((num, index, arr) => {
      if (arr[0] === '0') {
        return '';
      }
      if ((arr.length - 1 - index) % 3 === 0 && index !== arr.length - 1) {
        return num + ' ';
      }
      return num;
    })
    .join('');
  return formattedInputValue;
};
const phoneValidation = (value: string): string => {
  let formattedInputValue = '';
  if (['7', '8', '9'].includes(value[0])) {
    if (value[0] === '9') formattedInputValue = `+7 (${value[0]}`;
    if (value[0] === '7') formattedInputValue = `+7 (`;
    if (value[0] === '8') formattedInputValue = `8 (`;
  }
  if (value.length > 1) formattedInputValue += value.slice(1, 4);
  if (value.length > 4) formattedInputValue += ') ' + value.slice(4, 7);
  if (value.length > 7) formattedInputValue += '-' + value.slice(7, 9);
  if (value.length > 9) formattedInputValue += '-' + value.slice(9, 11);
  return formattedInputValue;
};
const maskValidate = (event: any) => {
  const input = event.target;
  const { name } = event.target;
  const selectionStart = input.selectionStart;
  const selectionEnd = input.selectionEnd;
  const inputValue = getInputNumbersValue(input.value);
  let formattedValue;
  switch (name) {
    case NAME.PHONE_NUMBER:
      formattedValue = phoneValidation(inputValue);
      break;
    case NAME.AMOUNT_PAY:
      formattedValue = amountValidation(inputValue);
      break;
    default:
      break;
  }
  if (input.value.length !== selectionStart) {
    input.value = formattedValue;
    input.selectionStart = selectionStart;
    input.selectionEnd = selectionEnd;
  } else {
    input.value = formattedValue;
  }
};
export default maskValidate;
