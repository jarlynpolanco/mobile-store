(function() {
    var control = angular.module('store-controllers', []);

    control.controller('MyCtrl1', ['$http', function($http) {

        }]);
    control.controller('MyCtrl2', ['$http', function($http) {

        }]);
    control.controller('ProductosController', ['$http', function($http) {
            var pCtrl = this;            
            pCtrl.productos = [];            
            $http.get("data/productos.json").success(function (data){
                pCtrl.productos = data;
            });
        }]);
})();
