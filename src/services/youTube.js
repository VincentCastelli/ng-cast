angular.module('video-player')
  .service('youTube', function($http) {

    this.search = function(enteredData, cb) {
      console.log(enteredData);

      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: enteredData.query || 'dogs',
          maxResults: enteredData.max || 5,
          key: enteredData.key || window.YOUTUBE_API_KEY,
          videoEmbeddable: true,
          type: 'video'
           
        }
      }).then(function successCallback(response) {
        cb(response);
        // this callback will be called asynchronously
        // when the response is available
        
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('no');
      });
    };
  });
