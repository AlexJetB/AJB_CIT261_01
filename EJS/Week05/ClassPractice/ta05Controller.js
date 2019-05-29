import hikeModel from './ta05Model.js';
import hikeView from './ta05View.js';

export default class hikeController() {
  constructor(elementID) {
    this.hikeModel = new hikeModel(); 
    this.hikeView = new hikeView(); // Populate later
  }

  showHikeList() {
    const hikeListElement = document.getElementById('hikes');
    hikeListElement.innerHTML = '';
    hikeList.forEach(hike => {
      hikeListElement.appendChild(renderHikeLight(hike));
    });
  }

}
