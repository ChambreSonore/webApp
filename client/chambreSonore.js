var
  player,
  done = false;

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
    Session.set('videos', result.data);
  }
});

Template.body.helpers({
  firstVideo: function(){
    var videos = Session.get('videos');
    if (videos && videos.items && videos.items.length){
      return videos.items[0]
    } else {
      return undefined;
    }
  },
  videos: function(){
    var videos = Session.get('videos');
    if (videos && videos.items && videos.items.length){
      return videos.items.splice(1)
    } else {
      return [];
    }
  },
  gridNumber: function(){
    var videos = Session.get('videos');
    if (videos && videos.items && videos.items.length){
      if (videos.items.length < 4 && videos.items.length > 0){
        return videos.items.length - 1;
      } else {
        return 3;
      }
    }
  }
});
