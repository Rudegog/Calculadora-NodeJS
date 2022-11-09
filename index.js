const Hapi = require('hapi');
const host = 'localhost';
const port = 3000; 
 
const server = Hapi.Server({
    host: host,
    port: port
});

const init = async () => {
    await server.start();
    console.log('API ON.')
}

require('./routes/routes')(server);
 
init();

server.route({
    method: 'GET',
    path: '/calculadora/about',
    handler: function (request, h) {
        const data = {
            msg: 'API Calculino rodando. Vamos as contas!'
        };
        return data;
    }
});