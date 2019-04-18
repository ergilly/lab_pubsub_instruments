const PubSub = require('../helpers/pub_sub.js');
const instrumentFamilyData = require('../data/instrument_family_data.js');


class InstrumentFamilies {

  constructor(data) {
    this.element = document.querySelector('instrument-families');
  }

  bindEvents() {
    PubSub.publish('Instruments:all-instruments-ready', instrumentFamilyData);

    PubSub.subscribe('SelectView:change', (event) => {
      const selectedIndex = event.detail;
      this.publishInstrumentDetail(selectedIndex);
    })
  }

  publishInstrumentDetail(instrumentIndex) {
    const selectedInstrumentFamily = instrumentFamilyData[instrumentIndex];
    PubSub.publish('Instruments:selected-instrument-ready', selectedInstrumentFamily);
  }


};

module.exports = InstrumentFamilies;
