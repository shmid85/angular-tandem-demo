angular.
module('angularjs').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.
        when('/info', {
            template: '<info></info>'
        }).
        when('/contacts', {
            template: '<contacts></contacts>'
        }).
        when('/map', {
            template: '<map></map>'
        }).
        when('/help', {
            template: '<help></help>'
        }).
        otherwise('/info');
    }
]);

angular.
module('angularjs').
run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function() {
        /**
         * It is needed to call re-routing process in the angular2+ app
         * when we serf in the old app and the frame is shown
         */
        window.parent.postMessage({
            type: 'routing',
            path: window.location.href
        //TODO: Add proxing and origin
        }, '*')
    });
});
