var signIn = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    });

    $stateProvider.state('here', {
        url: "/here",
        templateUrl: "partials/here.html",
        controller: 'AttendanceCtrl'
    });

    $stateProvider.state('signin', {
        url: "/signin",
        templateUrl: "partials/signin.html",
        controller: 'AttendanceCtrl'

    });

});
