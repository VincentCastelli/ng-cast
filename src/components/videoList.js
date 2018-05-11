angular.module('video-player')
  .component('videoList', {
    
    bindings: {
      videoData: '<'
    },
    
    templateUrl: './src/templates/videoList.html'
  });
