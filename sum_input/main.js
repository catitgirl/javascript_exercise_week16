const inputValue = document.querySelector('#userNumbers');
const savedElementsContainer = document.querySelector('#savedElementsContainer');
const saveButton = document.querySelector('#resultButton');
const arrValues = [];

saveButton.addEventListener('click', () => {
    arrValues.push(inputValue.value);
    savedElementsContainer.innerText = arrValues;
    document.querySelector('input').value = '';

    const sortElementsContainer = document.querySelector('#sortedElementsContainer');
    arrValues.sort((a, b) => a - b);
    sortElementsContainer.innerText = arrValues;

    const sumElementsContainer = document.querySelector('#sumElementsContainer');

    let sumArr = arrValues.reduce(function (sum, elem) {
        return (sum + +elem); //просим пояснить, почему не работает, если добавлять + к sum 
    }, 0);

    sumElementsContainer.innerText = sumArr;

});