"strict mode";

var moonPage = angular.module("moonPage", ["ngRoute"]);

moonPage.config(function($routeProvider){
    $routeProvider
    .when("/", 
        {
            templateUrl: "partial/home.html"
        })
    .when("/blog",
        {
            templateUrl: "partial/blog.html"
        })
});