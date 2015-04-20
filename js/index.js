var App = require('lfa-core/app');
var FakeNameGenerator = require('./fake-name-generator');

FakeNameGenerator.generateRandomName();
var ClassMateList = require('lfa-classroom/views/classmate-list');
var NameInput = require('lfa-classroom/views/name-input');

App.book.on('render', function (opts) {

  console.log('CHAPTER', opts.chapter);

  React.render(
    React.createElement(ClassMateList, null),
    document.getElementById('student-list')
  );

  React.render(
    React.createElement(NameInput, null),
    document.getElementById('name-input')
  );
});
