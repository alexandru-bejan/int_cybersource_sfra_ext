/* eslint-disable linebreak-style */
let System = require('dw/system');
let site = System.Site.getCurrent();

/**
 *
 * @returns {boolean} a boolean of true or false
 */
function isMicroformEnabled() {
    let microformCheck = false;
    if (site.getCustomPreferenceValue('OnBehalfOfMicroformEnable') === true)
        microformCheck = true;

  return microformCheck ;
}

function setSecureAcceptanceType() {
  site.setCustomPreferenceValue('CsSAType', 'SA_FLEX');
}

module.exports = {
  isMicroformEnabled: isMicroformEnabled,
  setSecureAcceptanceType: setSecureAcceptanceType
};
