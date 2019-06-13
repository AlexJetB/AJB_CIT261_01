const url = 'https://pokeapi.co/api/v2/'

// setTimeout(()=> { console.log('delay')
// }, 1000)

function getJson(url) {
  return fetch(url)
  .then(response => {
    if (response.ok) {
      console.log('in then', response);
      return response.json();
    } else {
      throw new Error('JSON retrieval failed!');
      console.log('Will not run.');
    }
  }).catch(err => {
    console.log(err);
  });
}

const myList = getJson(url + 'pokemon');
console.log(myList);

myList.then(data => {
  buildList(data);
  buildButtons(data);
});

function buildList(data) {
  const myListElement = document.getElementById('list');
  myListElement.innerHTML = data.results.map(item => `<li onClick="showOnePoke('${item.url}')">${item.name}</li>`)
  .join('');
}

function buildButtons(data) {
  var nextButton = document.getElementById('nextButton'),
      nextClone = nextButton.cloneNode(true);
  var prevButton = document.getElementById('prevButton'),
      prevClone = prevButton.cloneNode(true);

  //console.log(getEventListeners(nextButton));
  nextButton.addEventListener("click", function next(){
    if (data.next !== null) {
      //nukeList();
      prevButton.parentNode.replaceChild(prevClone, prevButton);
      const myList = getJson(data.next);
      console.log(myList);

      myList.then(newData => {
        buildList(newData);
        buildButtons(newData);
      });
    } else {
      console.log("Cannot proceed to empty next!")
    }
  }, {once:true});

  prevButton.addEventListener("click", function prev(){
    if (data.previous !== null) {
      //nukeList();
      nextButton.parentNode.replaceChild(nextClone, nextButton);
      const myList = getJson(data.previous);
      console.log(myList);

      myList.then(newData => {
        buildList(newData);
        buildButtons(newData);
      });

    } else {
      console.log("Cannot proceed to empty previous")
    }
  }, {once:true});
}

function showOnePoke(pokeURL) {
  const sprite = document.getElementById("sprite");
  const abilities = document.getElementById("abilities");
  const type = document.getElementById("type");
  const pokemon = getJson(pokeURL);

  pokemon.then(iData => {
    sprite.src = iData.sprites.front_default;
    abilities.innerHTML = iData.abilities.map(item => `${item.ability.name} | `)
    .join('');
    type.innerHTML = iData.types.map(item => `${item.type.name} | `).join('');
  })
}
