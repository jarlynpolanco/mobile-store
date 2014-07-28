(function() {
    var app = angular.module("mobile-store", ['ngRoute', 'store-directives']);

    app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'MyCtrl1'});
            $routeProvider.when('/inicio', {templateUrl: 'partials/inicio.html', controller: 'MyCtrl1'});
            $routeProvider.when('/productos', {templateUrl: 'partials/productos.html', controller: 'MyCtrl2'});
            $routeProvider.when('/error', {templateUrl: 'partials/error.html', controller: 'MyCtrl1'});
            $routeProvider.otherwise({redirectTo: '/inicio'});
        }]);
})();


