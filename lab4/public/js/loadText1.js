function loadText() {
    for (let i = 1; i <= 3; i++) {
      let divElement = document.getElementById("text" + i);
  
      fetch('public/text/text' + i + '.txt')
        .then(response => response.text())
        .then(data => {
          divElement.innerText = data;
        });
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadText);