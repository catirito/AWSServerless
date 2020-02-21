const zxcvbn = require('zxcvbn')

module.exports = password => {

    const score = zxcvbn(password).score;

    if (score < 2) {
        return Promise.reject({
            message: 'Password is to weak'
        })
    } 

    return Promise.resolve();
}