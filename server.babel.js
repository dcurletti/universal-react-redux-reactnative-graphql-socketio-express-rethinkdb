//  enable runtime transpilation to use ES6/7 in node

// var fs = require('fs');
// var babelrc = fs.readFileSync('./.babelrc');

var babelrcObject = {
  "presets": ["react", "es2015", "stage-0"],

  "plugins": [
    "transform-runtime",
    "add-module-exports",
    "transform-decorators-legacy",
    "transform-react-display-name"
  ],

  "env": {
    "development": {
      "plugins": [
        "typecheck",
        ["react-transform", {
          "transforms": [{
            "transform": "react-transform-catch-errors",
            "imports": ["react", "redbox-react"]
          }
          ]
        }]
      ]
    }
  }
};

require('babel-register')(babelrcObject);
