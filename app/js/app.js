(function() {
    var app = angular.module("mobile-store", ['ngRoute', 'store-directives', 'store-controllers']);

    app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'MyCtrl1'});
            $routeProvider.when('/inicio', {templateUrl: 'partials/inicio.html', controller: 'MyCtrl1'});
            $routeProvider.when('/productos', {templateUrl: 'partials/productos.html', controller: 'ProductosController'});
            $routeProvider.when('/error', {templateUrl: 'partials/error.html', controller: 'MyCtrl1'});
            $routeProvider.otherwise({redirectTo: '/inicio'});
        }]);

    app.directive('holderFix', function() {
        return {
            link: function(scope, element, attrs) {
                Holder.run({images: element[0], nocss: true});
            }
        };
    });
    
})();


