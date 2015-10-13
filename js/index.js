'use strict';
/*global require*/

var $ = require('jquery');
var App = require('lfa-core').App;
var Storage = require('lfa-core').Storage;

var FakeNameGenerator = require('./fake-name-generator');
var React = require('react');

require('./asset-preloader'); // no need to store

FakeNameGenerator.registerRandomName();

var ClassMateList = require('lfa-classroom').ClassmateList;
var NameInput = require('lfa-classroom').NameInput;

Storage.setItem('classroomCode', 'ee3');
Storage.setItem('classroomAutoconnect', 'true');

App.book.on('render', function (/*opts*/) {

  var studentList = document.getElementById('student-list');
  if (studentList)  {
    React.render(
      React.createElement(ClassMateList, null),
      studentList
    );
  }

  var nameInput = document.getElementById('name-input');
  if (nameInput) {
    React.render(
      React.createElement(NameInput, null),
      nameInput
    );
  }
});

if (Storage.getItem('clientId') === 'learnfwd-teacher') {
  $('html').addClass('classroom-is-teacher');
}
