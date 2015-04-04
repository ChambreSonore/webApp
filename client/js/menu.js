'use strict';

Session.set('activeMenu',0);

Template.body.events({
  'click #menu-home': function(){
    Session.set('activeMenu', 0);
    $.fn.fullpage.moveTo(1, 0);
  },
  'click #menu-sessions': function(){
    Session.set('activeMenu', 1);
    $.fn.fullpage.moveTo(1, 1);
  },
  'click #menu-concept': function(){
    Session.set('activeMenu', 2);
    $.fn.fullpage.moveTo(1, 2);
  },
  'click #menu-signup': function(){
    Session.set('activeMenu', 3);
    $.fn.fullpage.moveTo(1, 3);
  }
});

Template.body.helpers({
  'isActive': function(options){
    return (options.hash.id === Session.get('activeMenu'));
  }
});