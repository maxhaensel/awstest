'use strict';

exports.gittest = function(event, context, callback) {
  var contents = 'gittest'
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };
  callback(null, result);
};

