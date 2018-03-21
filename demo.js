'use strict';

const Hapi = require('hapi');
//const path = require('path');

const server =  Hapi.Server({ port: 3000, host: 'localhost' });
const init = async () => {

    await server.start();
    await server.register(require('inert'));

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (request, h) => {
        return 'hello';
        }
    });

    console.log(`Server running at: ${server.info.uri}`);
};
init();