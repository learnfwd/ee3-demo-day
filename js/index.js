var App = require('lfa-core/app');
var FakeNameGenerator = require('./fake-name-generator');

FakeNameGenerator.generateRandomName();
var ClassMateList = require('lfa-classroom/views/classmate-list');

App.book.on('render', function (opts) {

  console.log('CHAPTER', opts.chapter);

  React.render(
    React.createElement(ClassMateList, null),
    document.getElementById('student-list')
  );
});
