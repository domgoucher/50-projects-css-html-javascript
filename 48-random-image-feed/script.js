const container = document.querySelector('.container');
const rows = 10;

// NOTE: The random image source from the example no longer works.
// Original Image Source: https://source.unsplash.com/random/150x150
// New Random Image Source https://unsplash.it/150/150
// New source still requires extra code to generate a unique image

const imageURL = 'https://unsplash.it/';

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${imageURL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}/${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
