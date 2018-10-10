var axios = require('axios');

function test() {
    axios.get('https://mjbizdaily.com/')
        .then(function(res) {
            console.log(res.getElementById('main'));
            
        })
}

test();