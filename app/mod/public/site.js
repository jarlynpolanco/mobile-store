angular.module('CCCDigitalApp.site', ['ui-router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/inicio");
            $stateProvider
                    .state('site', {
                        url: "/",
                        templateUrl: "mod/public/site.tpl.html"
                    })
                    .state('site.inicio', {
                        url: "inicio",
                        templateUrl: "mod/public/inicio.html"
                    })
                    .state('site.productos', {
                        url: "productos",
                        templateUrl: "mod/public/productos.html"
                    });
        });

