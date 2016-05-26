function ContactController() {
  var vm = this;
  vm.name = 'Enoch';
  vm.email = 'enoch@email.com';
  vm.phone = '555-555-5555'

  this.changeName = function() {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
