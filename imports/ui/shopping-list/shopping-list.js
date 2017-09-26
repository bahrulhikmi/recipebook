import './ShoppingList.html';

Template.ShoppingList.onCreated(function shoppingListOnCreated(){
    var self = this;
    self.autorun(function(){
      self.subscribe('recipes');
    });
  });

Template.ShoppingList.helpers({
  shoppingList(){
      return Recipes.find({inMenu: true});
    },
  });