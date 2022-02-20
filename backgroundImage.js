const Images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const choosenImage = Images[Math.floor(Math.random() * Images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;
console.log(bgImage);

document.body.appendChild(bgImage);