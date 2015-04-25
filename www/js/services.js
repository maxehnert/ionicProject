angular.module('app.services',[]).factory('Todo', ['$http', 'PARSE_CREDENTIALS', function($http, PARSE_CREDENTIALS){
  return {
    getAll: function(){
      return $htp.get('https://api.parse.com/1/classes/Todo', {
        headers: {
          'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
          'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
        }
      });
    },
    get: function(id){
      reutrn $http.get('https://api.parse.com/1/classes/Todo' + id, {
        headers: {
          'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
          'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
        }
      });
    },
    create: function(data){
      return $http.get('https://api.parse.com/1/classes/Todo', data, {
        headers: {
          'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
          'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
          'Content-Type':'application/json'
        }
      });
    },
    edit:function(id,data){
      return $http.put('https://api.parse.com/1/classes/Todo/'+id,data, {
        headers: {
          'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
          'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
          'Content-Type':'application/json'
        }
      });
    },
    delete:function(id){
      return $http.delete('https://api.parse.com/1/classes/Todo/'+id, {
        headers: {
          'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
          'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
          'Content-Type':'application/json'
        }
      });
    }
  }
}]).value('PARSE_CREDENTIALS', {
    APP_ID: 'BD19p8F7u7o7GqBi0rtVBxKycM5ldMCfFVJjBXoR',
    REST_API_KEY:'vxBSZAkf3o1iYRM5WBdL1BwFHykfNatTXWHZmxuW'
});
