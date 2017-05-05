'use strict';

angular.module('gulpApp')
.controller('LoginHomeCtrl', function ($location,$rootScope,signinService,$timeout,localStorageService) {
  var vm = this;
  $rootScope.message = "password changed successfully";  
  vm.signin = function(){
    var params = {
      user: {
        email: vm.email,
        password: vm.password
      }
    }

    signinService.postData(params).then(function(response) {
      if (response.status === 200){
        localStorageService.set('qhub-role', response.role);
        localStorageService.set('response_zip',response.user.zip_code);
        if (response.role === "home_owner"){
          $location.path('/device');
          localStorageService.set('qhub-auth-token', response.user.authentication_token);
        }
        else{
          localStorageService.set('qhub-auth-token', response.user.authentication_token);
          $location.path('/cm_list_events');
        }
      }
      else {
        vm.flag_error = true;
        vm.flash = response.error;
        $timeout(function () { vm.flag_error = false; }, 4000);
      }
    });
  }

  vm.signup = function(){
    $location.path('/signup')
  }
  vm.forgot_password = function(){
  var params_email = {
    email: vm.email_pass
  }

  signinService.postData_passwd(params_email).then(function(response) {

  })
}

vm.email_null = function(){
  vm.email_pass = '';
}

});