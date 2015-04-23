var PeerDataStore = require('lfa-classroom/exercises/peer-data-store');
var App = require('lfa-core/app');
var $ = require('jquery');

var exerciseId = 1337;
var exercise = { id: exerciseId };
var amounts = [0, 5, 10, 50, 100, 350];
var maxAmount = 350;

function onChange() {
  var data = PeerDataStore.dataForExercise(exercise);

  var amount = 0;
  _.each(data, function (value) {
    try {
      amount += amounts[value.state];
    } catch (ex) {}
  });

  var ratio = amount / maxAmount;
  if (ratio > 1) { ratio = 1; }

  var $progress = $('.investment-progress');
  $progress.css('width', ratio * 100 + '%');
}

PeerDataStore.bindExerciseChanged(exercise, onChange);
PeerDataStore.fetchForExercise(exerciseId);

App.book.on('render', onChange);
