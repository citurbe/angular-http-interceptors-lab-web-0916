function theInterceptor() {
  this.responseError = function() {
    alert('whoops!')
  }
}

angular
  .module('app')
  .service('theInterceptor', theInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('theInterceptor');
  });
