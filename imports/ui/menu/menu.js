import './Menu.html';

Template.Menu.onCreated(function menuOnCreated(){
    var self = this;
    self.autorun(function(){
      self.subscribe('recipes');
    });
  });

Template.Menu.helpers({
  getRecipes(){
      return Recipes.find({inMenu: true});
    },
  });