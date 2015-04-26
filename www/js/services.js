// (function () {
//
//     angular.module('myApp', ['ngRoute', 'ngCookies', 'ui.gravatar'])
//     .constant('PARSE_HEADERS', {
//       headers: {
//         'X-Parse-Application-Id': 'd5qCX3sGcYznZ6vwMWVyKmqEcYIVUsSDe5ENW9xs',
//         'X-Parse-REST-API-Key': 'lyr7BjM1T98kW9wJq0MQyUjX9AgvHwvUvCWn4Gdg',
//         'Content-Type': 'application/json'
//       }
//     })
//     .constant('PARSE_URI', 'https://api.parse.com/1/')
//     .config( function ($routeProvider) {
//
//       $routeProvider.when('/', {
//         templateUrl: 'scripts/home/home.html',
//         controller: 'HomeCtrl'
//       })
//       .when('/mechhome', {
//         templateUrl: 'scripts/home/mech-home.html',
//         controller: 'HomeCtrl'
//       })
//
//
//       angular.module('myApp').factory('UserFactory', ['PARSE_HEADERS', 'PARSE_URI', '$http', '$cookieStore', '$location', '$window',
//             function (PARSE_HEADERS, PARSE_URI, $http, $cookieStore, $location, $window) {
//
//               var register = function (user) {
//                 return $http.post(PARSE_URI + 'users/', user, PARSE_HEADERS).success( function (data) {
//                   console.log(data);
//                   $location.path('/profile');
//                 });
//               };

    /* start new test parse headers section*/

angular.module('app.services',[]).factory('Todo', ['$http', 'PARSE_URI', 'PARSE_HEADERS', function($http, PARSE_URI, PARSE_HEADERS){
  return {
    getAll: function(){
      return $http.get(PARSE_URI, PARSE_HEADERS);
    },
    get: function(id){
      return $http.get(PARSE_URI + id, PARSE_HEADERS);
    },
    create: function(data){
      return $http.post(PARSE_URI, data, PARSE_HEADERS);
    },
    edit:function(id,data){
      return $http.put(PARSE_URI + id, data, PARSE_HEADERS);
    },
    delete:function(id){
      return $http.delete(PARSE_URI + id, PARSE_HEADERS);
    }
  }
}]);
/*Keep below*/

//
// angular.module('app.services',[]).factory('Todo', ['$http', 'PARSE_CREDENTIALS', function($http, PARSE_CREDENTIALS){
//   return {
//     getAll: function(){
//       return $http.get('https://api.parse.com/1/classes/Todo', {
//         headers: {
//           'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
//           'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
//         }
//       });
//     },
//     get: function(id){
//       return $http.get('https://api.parse.com/1/classes/Todo' + id, {
//         headers: {
//           'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
//           'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
//         }
//       });
//     },
//     create: function(data){
//       return $http.post('https://api.parse.com/1/classes/Todo', data, {
//         headers: {
//           'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
//           'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
//           'Content-Type':'application/json'
//         }
//       });
//     },
//     edit:function(id,data){
//       return $http.put('https://api.parse.com/1/classes/Todo/'+id,data, {
//         headers: {
//           'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
//           'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
//           'Content-Type':'application/json'
//         }
//       });
//     },
//     delete:function(id){
//       return $http.delete('https://api.parse.com/1/classes/Todo/'+id, {
//         headers: {
//           'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
//           'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
//           'Content-Type':'application/json'
//         }
//       });
//     }
//   }
// }]).value('PARSE_CREDENTIALS', {
//     APP_ID: 'BD19p8F7u7o7GqBi0rtVBxKycM5ldMCfFVJjBXoR',
//     REST_API_KEY:'vxBSZAkf3o1iYRM5WBdL1BwFHykfNatTXWHZmxuW'
// });
