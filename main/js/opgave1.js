

function getRandomColor() {
    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;
  
    const color = `rgb(${red}, ${green}, ${blue})`;
  
    return color;
  }
  
  const divs = document.querySelectorAll("div");


  function changeColors(){
  divs.forEach(d => d.style.backgroundColor = getRandomColor());

}
changeColors();