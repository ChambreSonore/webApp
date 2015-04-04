'use strict';

var twitterClient = new TwitMaker({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

var syncGet = Meteor.wrapAsync(twitterClient.get, twitterClient);

Meteor.methods({
  'getLastTweet': function(){
    return syncGet('statuses/user_timeline', {
      screen_name: 'chambre_sonore',
      count: 1
    })[0];
  }
});