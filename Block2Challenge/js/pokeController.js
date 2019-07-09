import { getJson } from './utilities.js';

// This is the base URL
const url = 'https://pokeapi.co/api/v2/';

export default class PokeController {
  constructor () {
    this.searchArray = [];
    this.resultArray = [];
  }
}

var myPokeController = new PokeController();

// Main code execution on load...

function init() {

  const myList = getJson(url + 'pokemon?limit=965&offset=0');
  console.log(myList);

  myList.then(data => {
    let array = buildPokeArray(data, true);
    myPokeController.searchArray = array;
    //console.log(myPokeController.searchArray);
    //console.log(array);
    buildList(array, true, 0, 10);
    buildButtons(array, true, 0, 10);
  });

  const mySelect = getJson(url + 'type');
  mySelect.then(data => {
    buildSelect(data);
  });
}

function buildList(data, whole, pagStart, pagEnd) {
  const myListElement = document.getElementById('list');
  if (whole === true) {
    myListElement.innerHTML = data.slice(pagStart, pagEnd).map(item => `<li onTouchEnd="showOnePoke('${item.url}')">${item.name}</li>`)
    .join('');
  } else if (whole === false) {
    myListElement.innerHTML = data.slice(pagStart, pagEnd).map(item => `<li onTouchEnd="showOnePoke('${item.pokemon.url}')">${item.pokemon.name}</li>`)
    .join('');
  }
}

function buildPokeArray(data, whole) {
  if (whole === true) {
    return data.results.map(function (item) {
      item[String(item.name)];
      return item;
    });
  } else if (whole === false) {
    return data.pokemon.map(function (item) {
      item[String(item.pokemon.name)];
      return item;
    });
  }
}

function buildButtons(data, listKind, pagStart, pagEnd) {
  let nextButton = document.getElementById('nextButton'),
      nextClone = nextButton.cloneNode(true);
  let prevButton = document.getElementById('prevButton'),
      prevClone = prevButton.cloneNode(true);

  nextButton.addEventListener("touchend", function nextOfType(){
    if (pagEnd < data.length) {
      prevButton.parentNode.replaceChild(prevClone, prevButton);

      pagStart += 10;
      pagEnd += 10;
      buildList(data, listKind, pagStart, pagEnd);
      buildButtons(data, listKind, pagStart, pagEnd);
      } else {
        console.log("Cannot proceed to empty next!")
      }
    }, {once:true});

  prevButton.addEventListener("touchend", function prevOfType(){
    if (pagStart !== 0) {
      nextButton.parentNode.replaceChild(nextClone, nextButton);

      pagStart -= 10;
      pagEnd -= 10;
      buildList(data, listKind, pagStart, pagEnd);
      buildButtons(data, listKind, pagStart, pagEnd);
    } else {
      console.log("Cannot proceed to empty next!")
    }
  }, {once:true});
}

function buildSelect(data) {
  let select = document.getElementById("typeSelect");
  select.innerHTML += data.results.map(item => `<option value="${item.name}">${item.name}</option>`)
  .join('');
}

function showOnePoke(pokeURL) {
  const resultBox = document.getElementById('');
  document.getElementById('list').display = "none";

  resultBox.display = "block";

  resultBox.display

  pokemon.then(iData => {
    sprite.src = iData.sprites.front_default;
    abilities.innerHTML = iData.abilities.map(item => `${item.ability.name} | `)
    .join('');
    type.innerHTML = iData.types.map(item => `${item.type.name} | `).join('');
  })
}

function nukeButtons() {
  let nextButton = document.getElementById('nextButton'),
      nextClone = nextButton.cloneNode(true);
  let prevButton = document.getElementById('prevButton'),
      prevClone = prevButton.cloneNode(true);
  nextButton.parentNode.replaceChild(nextClone, nextButton);
  prevButton.parentNode.replaceChild(prevClone, prevButton);
}

// Public functions...
function showType(typeExt) {
  if (typeExt !== "") {
    // "Nuke" buttons
    nukeButtons();

    console.log(typeExt);
    const newList = getJson(url + 'type/' + typeExt);
    newList.then(data => {
      let array = buildPokeArray(data, false);
      console.log(array);
      buildList(array, false, 0, 10);
      buildButtons(array, false, 0, 10);
    });
    return true;
  } else {
    init();
    return false;
  }
}

function search() {
  nukeButtons();
  
  const pokeName = document.getElementById('pokeName').value.toLowerCase();
  myPokeController.resultArray = myPokeController.searchArray.filter(function(item) {
    const pokeName = document.getElementById('pokeName').value.toLowerCase();
    const regex = new RegExp(pokeName, "g");

    if (item.name.match(regex)) {
      return item;
    }
  });

  console.log(myPokeController.resultArray);

  buildList(myPokeController.resultArray, true, 0, 10);
  buildButtons(myPokeController.resultArray, true, 0, 10);
  // pokeIndiv.then(result => {
  //   console.log(result);
  // });
}

// Public function... May look to revise using MVC
window.showType = showType;
window.showOnePoke = showOnePoke;
window.search = search;

init();
