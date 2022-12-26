//1. Дан массив ['js', 'css', 'html']. Выведите на экран первый элемент.

let arr = ['js', 'css', 'html'];
alert(arr.shift());


// 2. Отфильтруйте массив [0, 1, false, 2, undefined, '', 3, null] от нежелательных значений, таких как false, undefined, пустые строки, 0, null с помощью метода filter.  Ожидаемый результат: [1, 2, 3].

const items = [0, 1, false, 2, undefined, '', 3, null];

const filteredItems = items.filter(Number);

alert(items);
alert(filteredItems);

// 3. Дан массив [[1,2], [1,2,3], [1,2,3,4]]. Найдите индекс массива, длина которого > 3. Ожидаемый результат: 2
const arrs = [[1,2], [1,2,3], [1,2,3,4]].findIndex(i => i.length > 3);

alert (arrs);



