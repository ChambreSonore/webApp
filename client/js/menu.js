'use strict';

Template.body.events({
  'click #menu-home': function(event){
    $('#menu-home').addClass('active');
    $.fn.fullpage.moveTo(1, 0);
  },
  'click #menu-sessions': function(event){
    $('#menu-sessions').addClass('active');
    $.fn.fullpage.moveTo(1, 1);
  },
  'click #menu-concept': function(event){
    $('#menu-concept').addClass('active');
    $.fn.fullpage.moveTo(1, 2);
  },
  'click #menu-signup': function(event){
    $('#menu-signup').addClass('active');
    $.fn.fullpage.moveTo(1, 3);
  }
});