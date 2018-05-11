angular.module('video-player')

  .component('app', {
    controller: function() {
      this.videoData = window.exampleVideoData;
    },
    templateUrl: './src/templates/app.html'
  });
