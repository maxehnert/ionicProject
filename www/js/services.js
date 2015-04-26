
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
