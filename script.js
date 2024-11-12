/* ESERCIZIO 1
Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/
const changedTitle = document.querySelector("h1");

const changeTitle = function () {
  changedTitle.innerText = "Esercizio 12-11";
};
changeTitle();

/* ESERCIZIO 2
Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
  changedTitle.className += "myHeading";
};
addClassToTitle();

/* ESERCIZIO 3
Scrivi una funzione per che cambi il testo dei p figli di un div
 */

const changePcontent = function () {
  const changeParagraph = document.querySelectorAll("div p");
  changeParagraph.forEach((element) => {
    element.innerText = "Il testo è stato modificato da JavaScript";
  });
};
changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
 */

const changeUrls = function () {
  const url = document.querySelectorAll("a:not(footer a)");
  url.forEach((element) => {
    element.href = "https://www.google.com";
  });
};
changeUrls();

/* ESERCIZIO 5
Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
  const list = document.getElementById("secondList");
  list.innerHTML += "<li>4th</li>";
};
addToTheSecond();

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un secondo paragrafo al primo div
*/

const addParagraph = function () {
  const child = document.querySelector("body").firstElementChild;
  child.innerHTML += "<p>Paragrafo aggiunto con Javascript</p>";
};
addParagraph();

/* ESERCIZIO 7
Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
  const firstList = document.getElementById("firstList");
  firstList.remove();
};
hideFirstUl();

/* ESERCIZIO 8 
Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
  const backgroundList = document.querySelectorAll("ul");
  backgroundList.forEach((element) => {
    element.style.backgroundColor = "green";
  });
};
paintItGreen();

/* ESERCIZIO 9
Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {
  const characters = document.querySelector("h1");
  characters.addEventListener("click", function () {
    characters.slice(0, -1);
  });
};
makeItClickable();

/* ESERCIZIO 10
Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
 */

const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  footer.addEventListener("click", function () {
    alert(
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents"
    );
  });
};
revealFooterLink();

/* ESERCIZIO 11
Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const amazonTable = document.getElementById("tableArea");
const table = document.createElement("table");

const generateTable = function () {
  const thead = document.createElement("thead");
  thead.innerHTML +=
    "<th>Immagine</th><th>Nome prodotto</th><th>Quantità</th><th>Prezzo</th>";
  table.appendChild(thead);
  amazonTable.appendChild(table);
};
generateTable();

/* ESERCIZIO 12
Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () {
  const tbody = document.createElement("tbody");
  const row = document.createElement("tr");
  row.innerHTML =
    "<td><img src = headphones.jpg></td><td>Headphones</td><td>1</td><td>29.99</td>;";
  tbody.appendChild(row);
  table.appendChild(tbody);
};
addRow();

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {
  const img = document.querySelector("img");
  img.style.visibility = "hidden";
};
hideAllImages();

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () {};
