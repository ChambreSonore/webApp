'use strict';

Template.body.events({
  'click #housingTab': function(event){
    console.log(event);
    $('#housingTab').addClass('active');
    $('#housing').addClass('active');
    $('#mixingTab').removeClass('active');
    $('#mixing').removeClass('active');
  },
  'click #mixingTab': function(event){
    console.log(event);
    $('#mixingTab').addClass('active');
    $('#mixing').addClass('active');
    $('#housingTab').removeClass('active');
    $('#housing').removeClass('active');
  }
});

Template.housingForm.events({
  'submit .new-flat': function(event){

    Meteor.call('registerHousing', {
      name: event.target.name.value,
      familyName: event.target.familyName.value,
      email: event.target.email.value,
      flatName: event.target.flatName.value,
      date: event.target.date.value,
      style: event.target.style.value,
      motivations: event.target.motivations.value
    });

    return false
  }
});

Template.mixingForm.events({
  'submit .new-dj': function(event){

    Meteor.call('registerDj', {
      name: event.target.name.value,
      familyName: event.target.familyName.value,
      email: event.target.email.value,
      nom_de_scene: event.target.pseudo.value,
      date: event.target.date.value,
      style: event.target.style.value,
      motivations: event.target.motivations.value
    });

    return false
  }
});
