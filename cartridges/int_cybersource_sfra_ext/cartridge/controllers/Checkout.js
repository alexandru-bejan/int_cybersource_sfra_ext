/* eslint-disable linebreak-style */
'use strict';

var server = require('server');
server.extend(module.superModule);
var System = require('dw/system');
var site = System.Site.getCurrent();
var sitePreferences = require('*/cartridge/scripts/helpers/sitePreferences');


server.prepend('Begin', function (req, res, next) {
  var viewData = res.getViewData();
  viewData.microformEnabled = sitePreferences.isMicroformEnabled();
  if (viewData.microformEnabled === true) {
    // sitePreferences.setSecureAcceptanceType();
  }
  viewData.secureAcceptanceType = site.getCustomPreferenceValue('CsSAType');
  res.setViewData(viewData);
  next();
});

module.exports = server.exports();
