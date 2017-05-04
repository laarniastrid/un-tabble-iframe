var app = angular.module('myApp', [])

app.controller('iframeNoTab', iframeNoTab)

iframeNoTab.$inject = [];
  
function iframeNoTab() {
  var self = this;
  self.stopClick = function() {
    alert('hi there');
  }

  self.test = 'top - outside of iframe';
}


(function() {
    angular.module('myApp')
        .controller('iframeNoTab', iframeNoTab);

    iframeNoTab.$inject = [];

    function iframeNoTab() {
        var self = this;
        
        self.stopClick = function() {
            alert('hi there');
        }

        self.test = 'top - outside of iframe';
    }
})();
