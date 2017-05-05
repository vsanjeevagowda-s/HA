'use strict';

angular.module('gulpApp')
.factory('signinService', function ($http, localStorageService) {
  var obj = {
    postData: function(data) {

      function success (response) {
        return response.data;
      }

      function failure (response) {
        return response.data;
      }
      var params = data ;
      return $http.post('http://test-hawa-api.qwinix.io/api/v1/accounts/sign_in',params).then(success, failure);
    },
    getData: function() {
      function success (response) {
        return response.data;
      }

      function failure (response) {
        return response.data;
      }
      var apiKey = "3a7cda15c21fa8d0996d3078eb2a8b8b";
      // var zip_code = "90001"
      var zip_code = localStorageService.get('response_zip')
      return $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+zip_code+",us&appid="+apiKey).then(success, failure);
    },
    postData_passwd: function(data) {
      function success (response) {
        return response.data;
      }

      function failure (response) {
        return response.data;
      }
      var params = data ;
      return $http.post('http://test-hawa-api.qwinix.io/api/v1/accounts/password',params).then(success, failure);
    },
  };

  return obj;
});

