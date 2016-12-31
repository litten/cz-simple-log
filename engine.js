"format cjs";

var wrap = require('word-wrap');
var map = require('lodash.map');
var longest = require('longest');
var rightPad = require('right-pad');

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just
// fine.
module.exports = function (options) {

  var types = options.types;

  var length = longest(Object.keys(types)).length + 3;
  var count = 0;
  var choices = map(types, function (type, key) {
    count++;
    return {
      name: rightPad(count + '.' + key + ':', length) + ' ' + type.description,
      value: key
    };
  });

  return {
    // When a user runs `git cz`, prompter will
    // be executed. We pass you cz, which currently
    // is just an instance of inquirer.js. Using
    // this you can ask questions and get answers.
    //
    // The commit callback should be executed when
    // you're ready to send back a commit template
    // to git.
    //
    // By default, we'll de-indent your commit
    // template and will keep empty lines.
    prompter: function(cz, commit) {
      // Let's ask some questions of the user
      // so that we can populate our commit
      // template.
      //
      // See inquirer.js docs for specifics.
      // You can also opt to use another input
      // collection library if you prefer.
      cz.prompt([
        {
          type: 'list',
          name: 'type',
          message: '选择提交的类型:',
          choices: choices
        }, {
          type: 'input',
          name: 'subject',
          message: '写一个描述的变化的简短标题:\n'
        }, {
          type: 'input',
          name: 'body',
          message: '提供更多的更改描述:\n'
        }, {
          type: 'input',
          name: 'footer',
          message: '额外一些信息（Close #233、BREAKING CHANGE等）:\n'
        }
      ]).then(function(answers) {

        var maxLineWidth = 100;

        var wrapOptions = {
          trim: true,
          newline: '\n',
          indent:'',
          width: maxLineWidth
        };

        // parentheses are only needed when a scope is present
        /*var scope = answers.scope.trim();
        scope = scope ? '(' + answers.scope.trim() + ')' : '';*/

        var scope = '';
        // Hard limit this line
        var head = (answers.type + scope + ': ' + answers.subject.trim()).slice(0, maxLineWidth);

        // Wrap these lines at 100 characters
        var body = wrap(answers.body, wrapOptions);
        var footer = wrap(answers.footer, wrapOptions);

        commit(head + '\n\n' + body + '\n\n' + footer);

        console.log('成功commit，记得push哦');
      });
    }
  };
};
