'use strict';

module.exports.hello = async event => {
  var name = event.pathParameters.name;

  var msg = 'Hello Local World!';

  if(name) msg = `Hello ${name}`;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: msg,
      },
      null,
      2
    ),
  };
};



module.exports.showUser = async event => {
 var body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Post Done',
        input: `Hi ${body.name} ${body.lastname}`,
      },
      null,
      2
    ),
  };
};
