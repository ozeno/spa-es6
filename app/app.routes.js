routes.$inject = ['$locationProvider', '$routeProvider']
export default function routes($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/people', {
            template: '<people></people>'
        }).
        when('/people/:id', {
            template: '<person></person>'
        }).
        otherwise('/people')
}