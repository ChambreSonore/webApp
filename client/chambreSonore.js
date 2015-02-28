var
  player;

onYouTubeIframeAPIReady = function() {
  console.log('entering callback from youtube')
  HTTP.get('https://www.googleapis.com/youtube/v3/playlistItems', {
    params: {
      playlistId: 'PLxMkhH3dLxLNCmHJFMYIYY7LqBO2QFwPc',
      order: 'date',
      part: 'snippet',
      key: 'AIzaSyC9heFBAikx36BavK0fxNHr3k4Hz5ttgII'
    }
  }, function(error, result){
    if (error){
      console.error(error);
    } else {
      console.log(result.data);

      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: result.data.items[0].snippet.resourceId.videoId
      });

      $('#video-title').text(result.data.items[0].snippet.title);
      $('#video-description').text(result.data.items[0].snippet.description);
      Session.set('videos', result.data);
    }
  });
};

Template.body.events({
  'click .video-thumbnail': function(event){
    player.loadVideoById(this.snippet.resourceId.videoId, 0, 'default');
  }
});

