const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_information_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectView = new SelectView();
  selectView.bindEvents();

  const instrumentDropdown = new InstrumentFamilies();
  instrumentDropdown.bindEvents();

  const instrumentInfoView = new InstrumentInfoView();
  instrumentInfoView.bindEvents();

});
