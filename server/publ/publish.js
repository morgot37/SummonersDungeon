
Meteor.publish('publicLists', function() {
  return Lists.find({userId: {$exists: false}});
});

Meteor.publish('privateLists', function() {
  if (this.userId) {
    return Lists.find({userId: this.userId});
  } else {
    this.ready();
  }
});

Meteor.publish('todos', function(listId) {
  check(listId, String);

  return Todos.find({listId: listId});
});

Meteor.publish('allGames', function(userId) {
  if (userId) {
    return Games.find({$or:[{'players.device': userId},{players: {$size: 1}}]});
  }
});