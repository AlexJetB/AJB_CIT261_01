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

document.getElementById('shakeButton').onclick = function() {
  let question = document.getElementById('qInput').value;
  let qRegEx = /\w+['?']/

  if (question !== '' && qRegEx.test(question)) {
    const response = getJson('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    console.log(response);

    let answer = document.getElementById('answer');
    let photo = document.getElementById('photo');
    response.then(data => {
      console.log(data);
      answer.innerHTML = data;
      let photoNum = Math.floor(Math.random() * (7 - 1) + 1);
      photo.src = `resources/images/ronSwanson${photoNum}.jpg`;
    });
  } else {
    return false;
  }
};
