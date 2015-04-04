'use strict';


Template.body.helpers({
  videos: function(){
    var videos = Session.get('videos');
    if (videos && videos.items && videos.items.length){
      return videos.items
    } else {
      return [];
    }
  },
  selected: function(){
    return this.snippet.resourceId.videoId === Session.get('selectedVideoId');
  }
});