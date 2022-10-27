let plivo = require('plivo');
let client = new plivo.Client('auth_id', 'auth_token');

client.messages.create({
   user_id: '<user_id>',
    name: 'name',
    message: 'Hello, world!',
    status: 'busy'
}).then(function(message_created) {
    console.log(message_created)
});
