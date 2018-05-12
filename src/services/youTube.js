angular.module('video-player')
.service('youTube', function(params){
  
  $http({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data:{
      part: 'snippet',
      q: params.query,
      maxResults: params.max,
      key: params.key,
      videoEmbeddable: true,
      type: 'video',
         
    }
    }).then(function successCallback(response) {
      console.log('yay');
      // this callback will be called asynchronously
      // when the response is available
      
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
  });
  // TODO
});
