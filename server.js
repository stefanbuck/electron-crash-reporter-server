var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'POST',
    path: '/',
    handler: function (request, reply) {
      console.log(request.payload)
      reply()
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
