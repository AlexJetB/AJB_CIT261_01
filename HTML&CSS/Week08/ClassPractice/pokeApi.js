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
  myListElement.innerHTML = data.results.map(item => `<li>${item.name}</li>`)
  .join('');
}

function buildButtons(data) {
  const nextButton = document.getElementById('nextButton');
  const prevButton = document.getElementById('prevButton');

  nextButton.addEventListener("click", function(){
    nukeList();
    const myList = getJson(data.next);
    console.log(myList);

    myList.then(data => {
      buildList(data);
      buildButtons(data);
    });
  })
}

function nukeList() {
  const myListElement = document.getElementById('list');
  myListElement.innerHTML = '';
}
