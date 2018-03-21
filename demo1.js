'use strict';

const Hapi = require('hapi');

const server =  Hapi.Server({ port: 3000, host: 'localhost' });
function f1(){
    server.start();
server.route({
    method: 'GET',
    path: '/hello/{user*2}',
    handler: function (request, h) {

        const userParts = request.params.user.split('/u');
        return `Hello ${encodeURIComponent(userParts[0])} ${encodeURIComponent(userParts[1])}!`;
    }
})};
f1();