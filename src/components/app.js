angular.module('video-player')

  .component('app', {
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      
      this.onClick = (video) => {
        this.currentVideo = video;
      };
      
      this.searchResults = function(data) {
        
      };
    },
    templateUrl: 'src/templates/app.html'
  });
