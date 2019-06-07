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
      throw new Error('not ok');
      console.log('will not run');
    }
  }).catch(err => {
    console.log(err);
  });
}

const myList = getJson(url + 'region');
console.log(myList);

myList.then(data => {
  buildList(data);
});

function buildList(data) {
  const myListElement = document.getElementById('list');
  myListElement.innerHTML = data.results.map(item => `<li>${item.name}</li>`)
  .join('');
}

function longProcess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
    }, 200);
  })

}
longProcess().then((result) => {
  let total = 100 + result;
  console.log('total', total);
}).catch(err => {
  console.log('failed');
});
