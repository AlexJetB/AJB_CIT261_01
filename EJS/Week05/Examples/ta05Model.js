import

export default class hikeModel{
  constructor (key) {
    this.key = key;
    this.hikes = readLS(this.key) || [];
  }

  addHike (nHike) {
    const newHike {
      name: nHike.name,
      imgSrc: nHike.imgSrc,
      imgAlt: nHike.imgAlt,
      distance: nHike.distance,
      difficulty: nHike.difficulty,
      description: nHike.description,
      directions: nHike.directions
    };
    this.hikes.push(newHike);
    writeLS(this.key, this.hikes);
  }

  getHikes() {
    return hikes;
  }

  getHike(name) {
    return hikes.find(hike => hike.name === name);
  }
}

function readLS(key) {
  return JSON.parse(window.localStorage.getItem(key));
}
function writeLS(key, hikes) {
  window.localStorage.setItem(key, JSON.stringify(hikes));
}
