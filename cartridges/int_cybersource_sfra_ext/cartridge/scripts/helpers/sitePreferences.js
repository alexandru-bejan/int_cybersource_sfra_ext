/* eslint-disable linebreak-style */
let System = require('dw/system');

/**
 *
 * @returns {boolean} a boolean of true or false
 */
function isMicroformEnabled() {
    let site = System.Site.getCurrent();
    let microformCheck = false;
    if (site.getCustomPreferenceValue('OnBehalfOfMicroformEnable') === true)
        microformCheck = true;

  return microformCheck ;
}

module.exports = {
  isMicroformEnabled: isMicroformEnabled
};
