'use strict';

Meteor.call('getLastTweet', function(error, result){
  // We silently fail on twitter error for the user.
  if (error){
    throw new Error('Could not retrieve the last twit');
  }

  $('#lastTweet').text(result.text);
});