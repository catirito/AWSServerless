'use strict';
const { 
  verifyPasswordLength,
  verifyPasswordStrength
} = require('./constrains');



module.exports.password = async event => {
  try {
    const body = JSON.parse(event.body);

    await verifyPasswordLength(body.password);
    await verifyPasswordStrength(body.password);

    return {
      statusCode: 200,
      body: JSON.stringify({
        Message: 'OK'
      })
    }

  } catch(e) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        Message: `Error: ${e.message}`
      })
    }
  }
};
