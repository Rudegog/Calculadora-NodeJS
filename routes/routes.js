module.exports = function(server) {
 
        server.route({
            method: 'GET',
            path: '/calculadora/soma/{num1}/{num2}',
            handler: function (pedido) {
    
                const num1 = parseInt(pedido.params.num1);
                const num2 = parseInt(pedido.params.num2);
    
                var data = {
                    resultado: num1 + num2
                };
        
                return data;
            }
        });
    
        server.route({
            method: 'GET',
            path: '/calculadora/sub/{num1}/{num2}',
            handler: function (pedido){
    
                const num1 = parseInt(pedido.params.num1);
                const num2 = parseInt(pedido.params.num2);
    
                var data = {
                    resultado: num1 - num2
                };
        
                return data;
            }
        });
        server.route({
            method: 'GET',
            path: '/calculadora/multi/{num1}/{num2}',
            handler: function (pedido){
    
                const num1 = parseInt(pedido.params.num1);
                const num2 = parseInt(pedido.params.num2);
    
                var data = {
                    resultado: num1 * num2
                };
        
                return data;
            }
        });
        server.route({
            method: 'GET',
            path: '/calculadora/div/{num1}/{num2}',
            handler: function (pedido){
    
                const num1 = parseInt(pedido.params.num1);
                const num2 = parseInt(pedido.params.num2);
    
                var data = {
                    resultado: num1 / num2
                };
        
                return data;
            }
        });
    }