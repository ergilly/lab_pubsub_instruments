const PubSub = require('../helpers/pub_sub.js');

class InstrumentInfoView {
  constructor() {
    this.container = document.querySelector('#instrument-information')
  };

  bindEvents() {
    PubSub.subscribe('Instruments:selected-instrument-ready', (event) => {
      const instrumentFamily = event.detail;
      this.render(instrumentFamily);
    })
  }

  render(instrument) {
    const instrumentFam = document.createElement('h2')
    const description = document.createElement('p')
    const list = document.createElement('h3')
    instrumentFam.textContent = instrument.name;
    description.textContent = instrument.description;
    list.textContent = 'Instruments Include:';
    this.container.innerHTML = '';
    this.container.appendChild(instrumentFam);
    this.container.appendChild(description);
    this.container.appendChild(list);
    for (instrument of instrument.instruments) {
      const listItems = document.createElement('li')
      listItems.textContent = instrument;
      this.container.appendChild(listItems);
    }


  }
}

module.exports = InstrumentInfoView;
