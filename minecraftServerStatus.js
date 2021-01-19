const request = require('request');

let url;

const info = (ip, port = 25565, callback) => {
    url = `https://mcapi.us/server/status?ip=${ip}&port=${port}`;
    request(url, { json: true }, (err, res, body) => {
        if(err) {
            return callback(err);
        }
        return callback(null, body)
    });
}

module.exports = info;