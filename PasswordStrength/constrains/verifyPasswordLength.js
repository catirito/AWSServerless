

module.exports = password => {
    if (password.length < 6) {
        return Promise.reject({
            message: 'Password is to short'
        })
    } 

    return Promise.resolve();
}