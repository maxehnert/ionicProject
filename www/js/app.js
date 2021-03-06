// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'app.controllers', 'app.services' ])

.run(function($ionicPlatform, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
    //ADDED this from tutorial
    $state.go('todos');
  });
}).config(function($stateProvider){
  $stateProvider.state('todos', {
    url: '/todos',
    controller: 'TodoListController',
    templateUrl: 'views/todos.html'
  }).state('createTodo', {
    url: '/todo/new',
    controller: 'TodoCreationController',
    templateUrl: 'views/create-todo.html'
  }).state('editTodo', {
    url: '/todo/edit:id/:content',
    controller: 'TodoEditController',
    templateUrl: 'views/edit-todo.html'
  });
}).constant('PARSE_HEADERS', {
    headers: {
    'X-Parse-Application-Id':      'BD19p8F7u7o7GqBi0rtVBxKycM5ldMCfFVJjBXoR',
    'X-Parse-REST-API-Key': 'vxBSZAkf3o1iYRM5WBdL1BwFHykfNatTXWHZmxuW',
    'Content-Type': 'application/json'
    }
}).constant('PARSE_URI', 'https://api.parse.com/1/classes/Todo/');
