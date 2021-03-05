const kanyeQuotes = document.getElementById("kanye");

const fetchKanye = () => {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => (kanyeQuotes.innerHTML = data.quote));

};

