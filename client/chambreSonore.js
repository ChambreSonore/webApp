var
  player;

onYouTubeIframeAPIReady = function() {
  console.log('entering callback from youtube')
  HTTP.get('https://www.googleapis.com/youtube/v3/playlistItems', {
    params: {
      playlistId: 'UU5qblOHgtY5kWb0MnhCYmJA',
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

      Session.set('videos', result.data);
    }
  });
}

Template.body.helpers({
  videos: function(){
    var videos = Session.get('videos');
    if (videos && videos.items && videos.items.length){
      return videos.items
    } else {
      return [];
    }
  }
});
