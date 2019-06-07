import sudoPuzzleController from './sudokuPuzzleController.js';

export default class sudoPuzzleView {
  constructor(){
    this.trElS = '<tr class="row">';
    this.trElE = '</tr>';
    this.tdElS = '<td class="sudoSq" id="sudo';
    this.tdElE = '</td>';
  }

  createTable(sudoTable) {
    var tableHTML = document.getElementById('tableSpace');
    let i, j;
    var tableElements = '';
    for (i = 0; i < 9; i++) {
      tableElements += this.trElS;
      for (j = 0; j < 9; j++) {
        var value = sudoTable[i][j];
        tableElements += this.tdElS + `${i}${j}"><input type="number" name="`
        + `${i}${j}" id="sudo' + i + j + '" value="`;
        if (value === 0) {
          tableElements +=`" class="na" onchange="ping()">\n`;
        } else {
          tableElements += `${value}" class="correct square" readonly>\n`;
        }
        tableElements += this.tdElE;
      }
      tableElements += this.trElE;
    }
    tableHTML.innerHTML += tableElements;
  }
  // Perhaps not needed
  updateTable(sudoTable) {
    this.createTable(sudoTable);
  }
}
