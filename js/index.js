'use strict';
/*global require*/

var $ = require('jquery');
var App = require('lfa-core/app');
var FakeNameGenerator = require('./fake-name-generator');
var React = require('react');
require('./asset-preloader'); // no need to store
require('./investment-meter');

FakeNameGenerator.registerRandomName();

var ClassMateList = require('lfa-classroom/views/classmate-list');
var NameInput = require('lfa-classroom/views/name-input');

App.storage.setItem('classroomCode', 'ee3');
App.storage.setItem('classroomAutoconnect', 'true');

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

if (App.storage.getItem('clientId') === 'learnfwd-teacher') {
  $('html').addClass('classroom-is-teacher');
}
