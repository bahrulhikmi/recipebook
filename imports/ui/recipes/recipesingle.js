import './RecipeSingle.html';

Template.RecipeSingle.onCreated(function recipeSingleOnCreated(){
    var self = this;
    self.autorun(function(){
        var id = FlowRouter.getParam('id');        
        self.subscribe('singleRecipe', id);
    });
  });

Template.RecipeSingle.helpers({
  getRecipes(){
      var id = FlowRouter.getParam('id');    
      return Recipes.findOne({_id: id});
    },
  });