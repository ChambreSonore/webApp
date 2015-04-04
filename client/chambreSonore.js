var
  player;

function updatePlayerText(snippet){
  $('#video-title').text(snippet.title);
  $('#video-description').text(snippet.description.substring(0, 300));
}

onYouTubeIframeAPIReady = function() {
  console.log('entering callback from youtube');
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

      updatePlayerText(result.data.items[0].snippet);
      Session.set('videos', result.data);
      Session.set('selectedVideoId', result.data.items[0].snippet.resourceId.videoId);
    }
  });
};

Template.body.events({
  'click .video-thumbnail': function(event){
    updatePlayerText(this.snippet);
    player.loadVideoById(this.snippet.resourceId.videoId, 0, 'default');
    Session.set('selectedVideoId', this.snippet.resourceId.videoId);
  },
  'click .home-logo': function(){
    $.fn.fullpage.moveTo(1, 1);
    player.playVideo();
  }
});

