const formInputValue = document.getElementById('item-form');
const ItemList = document.getElementById('item-list');

console.log(ItemList);
const emptyArr = [];

formInputValue.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputData = document.getElementById('item-input').value;
  if (inputData) {
    emptyArr.push(inputData);
    console.log('ccc', emptyArr);
  }
  if (emptyArr.length > 0) {
    const storData = localStorage.setItem('data', JSON.stringify(emptyArr));
  }
});

// to get data from local storage & map it
const getData = localStorage.getItem('data');
const dataaa = JSON.parse(getData);

// ["xzx","bnfh","bnfhhjhgjg","jhg","jhg","jhg","jhg"]
dataaa.map((data) => {
  const listItem = document.createElement('li');
  listItem.textContent = data;
  ItemList.appendChild(listItem);
});
