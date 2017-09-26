import './Recipe.html';

Template.Recipe.onCreated(function(){
    this.editMode = new ReactiveVar(false);
});


Template.Recipe.events({
    'click .toggle-menu': function(){
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash': function(){
        Meteor.call('deleteRecipe', this._id);
    },
    'click .fa-pencil': function(event, template){
       // Session.set('editMode', !Session.get('editMode')) ---> to use it on template: {{#if $.Session.get 'editMode'}}
       template.editMode.set(!template.editMode.get());
    }
});

Template.Recipe.helpers({
    updateRecipeId(){
        return this._id;
    },
    editMode(){
        return Template.instance().editMode.get();
    }
});