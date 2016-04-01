Tracker.autorun(function() {
  Meteor.subscribe('allGames', Meteor.userId());
});