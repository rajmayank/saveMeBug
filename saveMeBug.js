'use latest';
const axios = require('axios');

module.exports = (context, callback) => {
    let userName = (context.secrets.username) ? context.secrets.username : '@all, ';
    let message = userName + ', ' + (context.secrets.message) ? context.secrets.message : username + 'marketing team has filed a hotfix bug with priority status "urgent (High Business Priority)". Please look into the issue at the earliest';
    if (context.secrets.target.toLowerCase() === 'slack' && context.secrets.token && context.secrets.channelid) {
        axios.get('https://slack.com/api/chat.postMessage', {
                params: {
                    token: context.secrets.token,
                    channel: context.secrets.channelid,
                    text: message
                }
            })
            .then(function(response) {
                callback(null, 'success');
            })
            .catch(function(error) {
                callback(error, 'failed');
            });

    } else if (context.secrets.target.toLowerCase() === 'hipchat' && context.secrets.url && context.secrets.roomid) {
        axios.post(context.secrets.url, {
                "color": "green",
                "message": message,
                "notify": true,
                "message_format": "text"
            })
            .then(function(response) {
                callback(null, 'success');
            })
            .catch(function(error) {
                callback(error, 'failed');
            });
    } else {
        callback('', {
            message: 'insufficient/incorrect parameters',
            secrets : context.secrets
        })
    }

}