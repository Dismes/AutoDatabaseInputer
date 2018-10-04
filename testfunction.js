var axios = require('axios');

function test() {
    axios.get('https://www.cannabisbroadcaststation.com/_functions/DatabaseInfo')
        .then(function(res) {
            console.log(res.data);
        })
}

test();