/// <reference path="libs/angular.min.js" />
'use strict';

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('BlogCtrl', ['$scope',
    function BlogCtrl($scope) {
        $scope.blogArticle = "This is a blog post about Angular JS. We will cover how to build a blog and how to add comments to the blog post.";
        $scope.blogList = [
            {
                "_id": 1,
                "date": 1400623623107,
                "introText": "This is Intro of Blog 1",
                "blogText": "This is blog text of Blog 1."
            },
            {
                "_id": 2,
                "date": 1400267723107,
                "introText": "This is Intro of Blog 2",
                "blogText": "This is blog text of Blog 2."
            }
        ];
    }]);

blogControllers.controller('BlogViewCtrl', ['$scope','$routeParams',
    function BlogViewCtrl($scope, $routeParams) {

        var blogId = $routeParams._id;
        var blog1= {
            "_id": 1,
            "date": 1400623623107,
            "introText": "This is Intro of Blog 1",
            "blogText": "This is blog text of Blog 1.",
            "comments":[
                {
                    "commentText":"Comment1"
                },
                {
                    "commentText":"Comment2"
                }
            ]
        };
        var blog2 = {
            "_id": 2,
            "date": 1400267723107,
            "introText": "This is Intro of Blog 2",
            "blogText": "This is blog text of Blog 2.",
            "comments": [
                {
                    "commentText": "Comment1"
                },
                {
                    "commentText": "Comment2"
                }
            ]
        };

        if (blogId === '1') {
            $scope.blogEntry = blog1;
        } else if (blogId === '2') {
            $scope.blogEntry = blog2;
        }
        
    }]);