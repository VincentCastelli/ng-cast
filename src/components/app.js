angular.module('video-player')

  .component('app', {
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      this.searchResults = function() {
        
      };
    },
    templateUrl: 'src/templates/app.html'
  });
