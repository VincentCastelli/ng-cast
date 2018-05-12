angular.module('video-player')
  .component('videoPlayer', {
    controller: function () {
      this.getSource = function(video) {
        return 'https://www.youtube.com/embed/' + video.id.videoId;
      };
    },
    
    bindings: {
      video: '<'
    },
    
    templateUrl: 'src/templates/videoPlayer.html'
  });
