/// <reference path="libs/jquery-3.1.1.intellisense.js" />
//'use strict';

//var blogApp = angular.module('blogApp', [
//    'ngRoute',
//    'blogControllers'
//]);

//blogApp.config(['$routeProvider','$locationProvider',
//    function($routeProvider, $locationProvider){
//        $routeProvider.
//            when('/', {
//                templateUrl: 'partials/main.html',
//                controller: 'BlogCtrl'
//            }).when('/blogPost/:_id', {
//                templateUrl: 'partials/blogPost.html',
//                controller: 'BlogViewCtrl'
//            });
//        $locationProvider.html5Mode(false).hashPrefix('!');
//    }]);
console.log('Start');
$(document).ready(function () {
    console.log('infunc');
    $('a').on('click', function (event) {
        console.log('inClickfunc');
        if (this.hash !== "") {
            console.log('insideif');
            event.preventDefault();
            var target = this.hash;
            console.log(target);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            console.log(target);
            $('html,body').animate({ scrollTop: target.offset().top }, 800);
            };
        });
    });