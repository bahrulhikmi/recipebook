import './Recipes.html';
import './NewRecipe.html';

Template.Recipes.onCreated(function recipesOnCreated(){
    var self = this;
    self.autorun(function(){
      self.subscribe('recipes');
    });
  });

Template.Recipes.helpers({
  getRecipes(){
      return Recipes.find({});
    },
  });

Template.NewRecipe.events({
  'click .fa-close': function(){
      Session.set('newRecipe', false);
  }
});

Template.Recipes.events({
  'click .new-recipe': function(){
      Session.set('newRecipe', true);
  }
});