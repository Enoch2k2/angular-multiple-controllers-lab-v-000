function ContactController() {
  var contact = this;
  contact.name = "Enoch";
  contact.email = "enoch2k2@email.com";
  contact.phone = "555-555-5555";

  contact.changeName = function() {
    contact.name = 'Something else!'
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController);
