'use strict';

const Hapi = require('hapi');

const server =  Hapi.Server({ port: 3000, host: 'localhost' });
const f1 = ()=>{
server.start(); 
    console.log(`Server running at: ${server.info.uri}`);
};
f1();
server.route({
method:'GET',
path:'/',
handler:function(request){
    const query = request.query;
    return query;
}

});
