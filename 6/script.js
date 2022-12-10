function fetchPersonSync() {
  let result;
  fetchPerson().then(res => result = res);
  return result;
}

async function fetchPerson() {
  const response = await fetch('https://randomuser.me/api');

  if (response.ok) {
    const json = await response.json();
    addPerson(json.results[0]);
  } else {
    alert("ERROR " + response.status);
  }
}

function addPerson(data) {
  const person = createDiv('person');

  const picture = createImg('pfp', data.picture.large);
  const name = createP('name', `${data.name.first} ${data.name.last}`);
  const cellphone = createP('cellphone', data.cell);
  const city = createP('city', data.location.city);
  const country = createP('country', data.location.country);

  person.appendChild(picture)
  person.appendChild(name);
  person.appendChild(cellphone);
  person.appendChild(city);
  person.appendChild(country);

  document.getElementById('container').appendChild(person);
}

const create = (className, text, tagName, src) => {
  const element = document.createElement(tagName);
  element.className = className;

  if (text) element.textContent = text;
  if (src) element.src = src;

  return element;
}

const createDiv = className => create(className, null, 'div', null);
const createImg = (className, src) => create(className, null, 'img', src);
const createP = (className, text) => create(className, text, 'p', null);

fetchPersonSync();