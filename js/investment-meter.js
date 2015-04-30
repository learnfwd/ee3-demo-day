var PeerDataStore = require('lfa-classroom/exercises/peer-data-store');
var ClassroomClientsStore = require('lfa-classroom/classroom-clients-store');
var App = require('lfa-core/app');
var $ = require('jquery');

var exerciseId = 1337;
var exercise = { id: exerciseId };
var amounts = [0, 5, 10, 50, 100, 350];
var maxAmount = 350;

function onChange() {
  var data = PeerDataStore.dataForExercise(exercise);

  var amount = 0; 
  _.each(ClassroomClientsStore.getClients(), function (client) {
    try {
      var value = data[client.id];
      var sum = amounts[value.state];
      if (typeof(sum) === 'number' && !isNaN(sum)) {
        amount += sum;
      }
    } catch (ex) {}
  });

  var ratio = amount / maxAmount;
  if (ratio > 1) { ratio = 1; }

  var $progress = $('.investment-progress');
  $progress.css('width', ratio * 100 + '%');

  var $amount = $('.investment-amount');
  $amount.html('£' + amount + 'k');
  $amount.toggleClass('investment-over-half', ratio > 0.5);
}

PeerDataStore.bindExerciseChanged(exercise, onChange);
ClassroomClientsStore.bindChangeListener(onChange);
App.book.on('render', onChange);

function fetch() {
  PeerDataStore.fetchForExercise(exerciseId);
}

App.on('classroom:connected', fetch);
App.book.on('render', fetch);
fetch();

