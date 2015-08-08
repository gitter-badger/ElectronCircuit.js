(function() {
  var app = angular.module('ElectronCircuit',['ngRoute']);

  app.controller('list_controller', function() {
    this.list = function() {
      var json_obj;

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://o.ramac.me:3000/api/packs", false);
      xhr.send();
      if (xhr.status == 200) {
          json_obj = JSON.parse( xhr.responseText );
          console.log(json_obj);
          return json_obj;
      } else {
        console.log(xhr.status);
        console.log(xhr.responseText);
      }
    }
  });
})();
