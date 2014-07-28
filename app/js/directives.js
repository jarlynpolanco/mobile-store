(function() {
    var directives = angular.module("store-directives", []);

    directives.directive("menuPrincipal", function() {
        return {
            restrict: "E",
            templateUrl: "partials/menu-principal.html",
            controller: function() {
                this.tab = 1;

                this.isSet = function(checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function(activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tabMenu"
        };
    });
})();
