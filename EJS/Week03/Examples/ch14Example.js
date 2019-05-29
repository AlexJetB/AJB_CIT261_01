const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

function makeTable(list) {
  let divEl = document.getElementById('mountains');
  let tableEl = document.createElement("TABLE");

  for (var i = 0; i < list.length; i++) {
    let trEl = document.createElement("TR");
    let thEl1 = document.createElement("TH");
    let thEl2 = document.createElement("TH");
    let thEl3 = document.createElement("TH");
    let tdEl1 = document.createElement("TD");
    let tdEl2 = document.createElement("TD");
    let tdEl3 = document.createElement("TD");
    var name, height, place;
    let dataArray = new Array();
    if (i === 0) {
      name = document.createTextNode("Name");
      height = document.createTextNode("Height");
      place = document.createTextNode("Place");
      thEl1.appendChild(name);
      thEl2.appendChild(height);
      thEl3.appendChild(place);
      trEl.appendChild(thEl1);
      trEl.appendChild(thEl2);
      trEl.appendChild(thEl3);
    } else {
      name = document.createTextNode(list[i].name);
      height = document.createTextNode(list[i].height);
      place = document.createTextNode(list[i].place);
      tdEl1.appendChild(name);
      tdEl2.appendChild(height);
      tdEl3.appendChild(place);
      trEl.appendChild(tdEl1);
      trEl.appendChild(tdEl2);
      trEl.appendChild(tdEl3);
    }
    tableEl.appendChild(trEl);
  }
  divEl.appendChild(tableEl);
}

makeTable(MOUNTAINS);
