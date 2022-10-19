/* eslint-disable linebreak-style */
'use strict';

var server = require('server');
server.extend(module.superModule);
var System = require('dw/system');
var site = System.Site.getCurrent();
var sitePreferences = require('*/cartridge/scripts/helpers/sitePreferences');
var CybersourceConstants = require('*/cartridge/scripts/utils/CybersourceConstants');

server.prepend('Begin', function (req, res, next) {
  var viewData = res.getViewData();
  viewData.microformEnabled = sitePreferences.isMicroformEnabled();
  // var Flex = require('*/cartridge/scripts/secureacceptance/adapter/Flex');
  // var flexResult = Flex.CreateFlexKey();
  if (viewData.microformEnabled === true) {
    // sitePreferences.setSecureAcceptanceType();
  }
  // viewData.flexResult = flexResult;
  viewData.secureAcceptanceType = site.getCustomPreferenceValue('CsSAType');
  res.setViewData(viewData);
  next();
});

module.exports = server.exports();