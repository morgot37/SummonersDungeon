Lists = new Mongo.Collection('lists');

// Calculate a default name for a list in the form of 'List A'
Lists.defaultName = function() {
  var nextLetter = 'A', nextName = 'List ' + nextLetter;
  while (Lists.findOne({name: nextName})) {
    // not going to be too smart here, can go past Z
    nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
    nextName = 'List ' + nextLetter;
  }

  return nextName;
};

Todos = new Mongo.Collection('todos');


Grids = new Meteor.Collection('grids');
Games = new Meteor.Collection('games');

/*Games.allow({
  update: function(userId, doc, fieldNames, modifier) {
    if (_.contains(fieldNames, 'grid')) {
      return modifier.$set;
    }
    if (_.contains(fieldNames, 'players')) {
      return modifier.$addToSet.players;
    } else {
      return modifier.$pull.players;
    }
  },

  remove: function(userId, doc) {
    return true;
  }
});*/