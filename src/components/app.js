angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
      this.videos = [];//window.exampleVideoData;
      this.currentVideo = {};//this.videos[0];
      this.$onInit = function() {
        youTube.search({
          query: 'dogs'
        },
        (data) => {
          this.videos = data.data.items;
          this.currentVideo = data.data.items[0];
        });
      };
        
      
      
      this.onClick = (video) => {
        this.currentVideo = video;
      };
      
      this.searchResults = (message) => {
        youTube.search({
          query: message
        },
        (data) => {
          this.videos = data.data.items;
          this.currentVideo = data.data.items[0];
        });
      };
      // youTube.search({
      //   query:'dogs',
      //   max: 5,
      //   key: window.YOUTUBE_API_KEY
      // });
    },
    templateUrl: 'src/templates/app.html'
  });
