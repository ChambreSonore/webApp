'use strict';

var housingSheet = new GoogleSpreadsheet('1JlfHva4Uqout0MabmQJWADDHW5snMqw_nzMGPOLBQhs');
var DjsSheet = new GoogleSpreadsheet('1-P0VKQKxKve4lKvrapdTOuV165Y25e8YBHphvHPv_wg');

Meteor.methods({
  registerHousing: function(housing){

    if (!housing){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty housing');
    }
    if(!housing.name){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty name');
    }
    if(!housing.familyName){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty familyName');
    }
    if(!housing.email){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty email');
    }
    if(!housing.date){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty date');
    }
    if(!housing.style){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty musicStyle');
    }
    if(!housing.motivations){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty motivation');
    }

    housingSheet.setAuth('chambresonore@gmail.com', ''+process.env.g_password, function(err){

      if (err){
        throw err;
      }

      housingSheet.addRow( 1, {
        prenom: housing.name,
        nom: housing.familyName,
        email: housing.email,
        appart: housing.flatName,
        disponibilite: housing.date,
        style: housing.style,
        motivations: housing.motivations
      });
    });
  },
  registerDj: function(Dj){

    if (!Dj){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty housing');
    }
    if(!Dj.name){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty name');
    }
    if(!Dj.familyName){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty familyName');
    }
    if(!Dj.email){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty email');
    }
    if(!Dj.date){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty date');
    }
    if(!Dj.style){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty musicStyle');
    }
    if(!Dj.motivations){
      throw new Meteor.Error('invalid-input', 'You cannot register an empty motivation');
    }

    DjsSheet.setAuth('chambresonore@gmail.com', ''+process.env.g_password, function(err){

      if (err){
        throw err;
      }

      DjsSheet.addRow( 1, {
        prenom: Dj.name,
        nom: Dj.familyName,
        email: Dj.email,
        nom_de_scene: Dj.pseudo,
        disponibilite: Dj.date,
        style: Dj.style,
        motivations: Dj.motivations
      });
    });
  }
});

Meteor.startup(function () {
  // code to run on server at startup
});