import { getJson, nukeButtons } from './utilities.js';

export default class PokeView {
  constructor () {
    this.myListElement = document.getElementById('list');
  }

  buildList(data, whole, pagStart, pagEnd) {
    const myListElement = this.myListElement; //REMOVE WHEN WORKING
    myListElement.innerHTML = '';
    if (whole === true) {
      const chunk =  data.slice(pagStart, pagEnd);

      chunk.forEach(function(element) {
        let liElement = document.createElement('LI');
        liElement.innerHTML = element.name;
        liElement.addEventListener('touchend', function() {
          showOnePoke(element.url);
        }, {once:true});
        myListElement.appendChild(liElement);
      });
    } else if (whole === false) {
      const chunk = data.slice(pagStart, pagEnd);

      chunk.forEach(function(element) {
        let liElement = document.createElement('LI');
        liElement.innerHTML = element.pokemon.name;
        liElement.addEventListener('touchend', function() {
          showOnePoke(element.pokemon.url);
        }, {once:true});
        myListElement.appendChild(liElement);
      });
    }
  }
}

function showOnePoke(pokeURL) {
  // console.log(pokeURL);
  document.getElementById('list').style.display = 'none';
  document.getElementById('nav1').style.display = 'none';
  document.getElementById('nav2').style.display = 'flex';
  document.getElementById('indiv').style.display = 'inline-block';

  const stats = document.getElementById('stats');
  const sprite = document.getElementById('sprite');
  const backBttn = document.getElementById('backButton');
  const viewBttn = document.getElementById('viewButton');

  const indiEntry = getJson(pokeURL);

  indiEntry.then(data => {
    sprite.innerHTML = `<img src="${data.sprites.front_default}" class="sprite">`;
    stats.innerHTML = `<h4>Pokemon:
    ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h4>
    <h4>Stats:</h4>`

  });
}
