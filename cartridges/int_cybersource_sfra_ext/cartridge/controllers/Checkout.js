/* eslint-disable linebreak-style */
'use strict';

var server = require('server');
server.extend(module.superModule);


server.prepend('Begin', function (req, res, next) {
  var System = require('dw/system');
  var site = System.Site.getCurrent();
  var viewData = res.getViewData();
  viewData.microformEnabled = site.getCustomPreferenceValue('OnBehalfOfMicroformEnable');
  res.setViewData(viewData);
  next();
});

module.exports = server.exports();
