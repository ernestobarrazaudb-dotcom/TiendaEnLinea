// Servicio que se conecta al internet para traer los productos
app.factory('tiendaService', ['$http', function($http) {
    var urlBase = 'https://fakestoreapi.com';

    return {
        // Función para traer todos los productos
        obtenerProductos: function() {
            return $http.get(urlBase + '/products')
                .then(function(response) {
                    return response.data;
                });
        },
        // Función para traer las categorías
        obtenerCategorias: function() {
            
            return $http.get(urlBase + '/products/categories')
                .then(function(response) {
                    
                    return response.data;
                });
        }
    };
}]);