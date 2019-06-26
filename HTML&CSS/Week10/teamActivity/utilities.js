export function getJSON(url) {
  return fetch(url)
  .then(response => {
    if (response.ok) {
      console.log('in promise\'s then', response);
      return response.json();
    } else {
      throw new Error('JSON retrieval failed!');
      console.log('Not running');
    }
  }).catch(err => {
    console.log(err);
  });
}

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

// const testURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-01-02'
//
// console.log(getJSON(testURL));
// console.log(getLocation().then());
