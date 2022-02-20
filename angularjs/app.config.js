import angular from 'angular';

angular.
module('angularjs').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.
        when('/info', {
            template: '<h3>This is Information from AngularJS app</h3>'
        }).
        when('/contacts', {
            template: '<h3>This is Contact from AngularJS app</h3>'
        }).
        when('/map', {
            template: '<h3>This is Map from AngularJS app</h3>'
        }).
        when('/help', {
            template: '<h3>This is Help from AngularJS app</h3>'
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

        const path = window.location.href.replace(/^.*\/?#\//, '');

        window.parent.postMessage({
            type: 'routing',
            path
        //TODO: Add proxing and origin
        }, '*');

        console.log('Angularjs', window.location.href);
    });
});
