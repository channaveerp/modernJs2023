const ItemInput = document.getElementById('ItemInput');
const SelectPriority = document.getElementById('priority');
const checkbox = document.getElementById('itemCheckbox');

const heading = document.querySelector('h1');

function Oninput(e) {
  heading.textContent = e.target.value;
}

function Onselect(e) {
  heading.textContent = e.target.value;
}

function onCheck(e) {
  heading.textContent = e.target.checked;

  console.log(e.target.checked);
}

// ItemInput.addEventListener('input', Oninput);
// ItemInput.addEventListener('input', onCheck);

checkbox.addEventListener('input', onCheck);
