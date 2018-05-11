angular.module('video-player')
  .component('videoListEntry', {
    
    bindings: {
      singleVideo: '<'
    },
    templateUrl: './src/templates/videoListEntry.html'
  });
