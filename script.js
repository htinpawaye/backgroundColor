const generateBtn1 = document.getElementById("generateBtn1");
const generateBtn2 = document.getElementById("generateBtn2");

generateBtn1.onclick = () => {
  document.body.style.background = generateColorCode();
};
let generateColorCode = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const alpha = Math.random();
  return `rgba(${red},${green},${blue},${alpha})`;
};

generateBtn2.onclick = () => {
  document.body.style.background = generateColorCode1();
};
let generateColorCode1 = () => {
  //   let red = Math.floor(Math.random() * 256);
  //   let green = Math.floor(Math.random() * 256);
  //   let blue = Math.floor(Math.random() * 256);
  //   return `linear-gradient(to right,rgb(${blue},${red},${green}),rgb(${green},${blue},${red}))`;

  //OR

  let color = [
    "brown",
    "pink",
    "yellow",
    "orange",
    "skyblue",
    "lightgreen",
    "black",
  ];
  let random = Math.floor(Math.random() * 7);
  let random2 = Math.floor(Math.random() * 7);

  return `linear-gradient(to right,${color[random]},${color[random2]})`;
};

// setInterval(() => {
//   document.body.style.background = generateColorCode();
// }, 1000);

// setInterval(() => {
//   document.body.style.background = generateColorCode1();
// }, 1000);
