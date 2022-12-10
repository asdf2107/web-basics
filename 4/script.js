// task 1

const changeColor = (e) => {
  e.target.style.color = e.target.style.color == 'gold' ? 'blue' : 'gold';
  e.target.style.background = e.target.style.background == 'blue' ? 'gold' : 'blue';
};

document.getElementById("el1").onclick = changeColor;
document.querySelector("#el1 + p").onclick = changeColor;

// task 2

const getLastImg = () => document.querySelector("img:last-child");

const imageActions = {
  'add': () => {
    const newEl = document.createElement('img');
    newEl.src = 'http://photos.wikimapia.org/p/00/00/83/88/99_big.jpg';
    newEl.alt = 'Дивовижний краєвид українського міста';
    newEl.style.width = '50%';
    document.getElementById('images').appendChild(newEl);
  },
  'bigger': () => { 
    const lastImg = getLastImg();
    if (lastImg) {
      lastImg.style.width = lastImg.style.width.replace('%', '') * 2 + '%';
    }
  },
  'smaller': () => { 
    const lastImg = getLastImg();
    if (lastImg) {
      lastImg.style.width = lastImg.style.width.replace('%', '') / 2 + '%';
    }
  },
  'delete': () => { 
    getLastImg()?.remove();
  },
};

for (const key in imageActions) {
  document.getElementById(key).onclick = imageActions[key];
}

imageActions.add(); // add first image