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



/**
 * Below : this is how I prefer to make controllers, but for some reason codepen
 * didn't seem to like it.  Also, I didn't spend much time on why it wasn't working
 * this way on codepen since it was such a small test.
 */

// (function() {
//     angular.module('myApp')
//         .controller('iframeNoTab', iframeNoTab);

//     iframeNoTab.$inject = [];

//     function iframeNoTab() {
//         var self = this;
        
//         self.stopClick = function() {
//             alert('hi there');
//         }

//         self.test = 'top - outside of iframe';
//     }
// })();
