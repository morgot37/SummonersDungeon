Template.selectQueue.helpers ({
  gamesWaiting: function() {
    var gameList = Games.find({players: {$size: 1}, gameStatus: 'fresh'}).fetch();
    if (gameList.length > 0) {
      return gameList;
    }
  },

  gameInProgress: function() {
    var isFresh = Games.findOne({'players.device': Meteor.userId(), gameStatus: 'fresh'});
    if (isFresh) {
    return isFresh._id;
    }
  },

  gameCompleted: function() {

  }
});

Template.selectQueue.events ({

  'click section.waiting-queue': function(evt) {
    var joinGameId = this._id;

    Games.update(
      {_id: joinGameId},
      {$addToSet: {players: {device: Meteor.userId(), matches: [], totalScore: 0, deviceName: 'Green'}}},
      function(err, res) {
        Session.set('gameId', joinGameId);
        localStorage.setItem('sm_gameId', joinGameId);
      }
    );
  },

  'click #new-game-1v1': function(evt) {
    var gameSize = '7';
    if (Meteor.userId())
    {
        Meteor.call('newGame', Meteor.userId(), gameSize, function(err, res) {
        //var newGameId = res;
        //Session.set('gameId', newGameId);
        //localStorage.setItem ('sm_gameId', Session.get('gameId'));
        });
    }
    else
    {
        alert('Your nor authorizated!');
    }
  }
});