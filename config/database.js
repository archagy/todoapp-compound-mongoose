module.exports = {
    development: {
        driver:   'mongodb',
        url:      'mongodb://localhost:27017/local'
    },
    test: {
        driver:   'mongodb',
        url:      'mongodb://localhost/APPNAME-test'
    },
    production: {
        driver:   'mongodb',
        url:      'mongodb://localhost/APPNAME-production'
    }
};
