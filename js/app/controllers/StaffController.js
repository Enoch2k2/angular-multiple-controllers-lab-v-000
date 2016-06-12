function StaffController(){
  var staff = this;
  staff.name = "Casey";
  staff.email = "casey@email.com";
  staff.phone = "555-555-5555";
}

angular
  .module('app')
  .controller('StaffController', StaffController);
