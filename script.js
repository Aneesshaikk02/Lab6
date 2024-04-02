function printPyramid() {
  const height = document.getElementById("height").value;
  const pyramidElement = document.getElementById("pyramid");
  let output = "";

  for (let i = 1; i <= height; i++) {
    let line = "";
    const spaces = height - i;

    for (let j = 0; j < spaces; j++) {
      line += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      line += "*";
    }

    output += `<div>${line}</div>`;
  }

  pyramidElement.innerHTML = output;
}

function refreshPage() {
  window.location.reload();
}