function createTable() {
  const table = document.getElementById('color-table');
  const tableSize = 6;
  const variant = 1;

  for (let i = 0; i < tableSize; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < tableSize; j++) {
      const element = document.createElement('td');
      const number = i * tableSize + j + 1;
      element.textContent = number;

      if (number === variant) {
        element.onmouseenter = () => setColor(element, getRandomColor());
        element.onclick = () => setColor(element, getChosenColor());
        element.ondblclick = () => setColor(row, getChosenColor())
      }

      row.appendChild(element);
    }

    table.appendChild(row);
  }
}

const colorPicker = document.getElementById('color-picker');
const getChosenColor = () => colorPicker.value;
const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

function setColor(element, color) {
  element.style.background = color;
}

createTable();