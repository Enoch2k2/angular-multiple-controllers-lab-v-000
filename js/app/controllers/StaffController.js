function StaffController() {
  var vm = this;
  vm.name = 'name';
  vm.email = 'name@email.com';
  vm.phone = '555-555-4444';
}

angular
  .module('app')
  .controller('StaffController', StaffController)
