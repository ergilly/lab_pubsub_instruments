const PubSub = require('../helpers/pub_sub.js');

class SelectView {

  constructor(data) {
    this.element = document.querySelector('#instrument-families');
  }

  bindEvents() {
    PubSub.subscribe('Instruments:all-instruments-ready', (event) => {
      const instrumentDropdown = event.detail;
      //console.log(instrumentDropdown);
      this.populate(instrumentDropdown);

      this.element.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;
        PubSub.publish('SelectView:change', selectedIndex);
      })
    });

  }

  populate(data) {
    data.forEach((instrument, index) => {
      const option = document.createElement('option');
      option.textContent = instrument.name;
      option.value = index;
      this.element.appendChild(option);
    })

  }

};

module.exports = SelectView;
