/* eslint-disable */
const {UNARY, BINARY} = require('./operators')

const UNARY_OPERATOR_DEFINITION = 'un'
const BINARY_OPERATOR_DEFINITION = 'bi';

const isUnary = (t, node) => {
    return t.isCallExpression(node.expression) &&
        t.isIdentifier(node.expression.callee) &&
        node.expression.callee.name === UNARY_OPERATOR_DEFINITION &&
        node.expression.arguments[0] != null &&
        t.isLiteral(node.expression.arguments[0]) &&
        node.expression.arguments[0].value in UNARY;
}

const isBinary = (t, node) => {
    return t.isCallExpression(node.expression) &&
        t.isIdentifier(node.expression.callee) &&
        node.expression.callee.name === BINARY_OPERATOR_DEFINITION &&
        node.expression.arguments[0] != null &&
        t.isLiteral(node.expression.arguments[0]) &&
        node.expression.arguments[0].value in BINARY;
}

const findOverloadUnary = (scope, operator) => {
    const type = UNARY[operator];

    while ( scope ) {
        if ( scope[type] ) { return scope[type]; }
        scope = scope.parent;
    }
}

const findOverloadBinary = (scope, operator) => {
    const type = BINARY[operator];

    while ( scope ) {
        if ( scope[type] ) { return scope[type]; }
        scope = scope.parent;
    }
}

module.exports = function (_ref) {
  const t = _ref.types;
  return {
    visitor: {
      ExpressionStatement: function ExpressionStatement(path) {
        var node = path.node;
        var scope = path.scope;


        if (isUnary(t, node)) {
          var operator = node.expression.arguments[0].value;
          var operatorType = UNARY[operator];
          var id = scope.generateUidIdentifier(operatorType);

          scope[operatorType] = id;

          path.replaceWith(t.VariableDeclaration("const", [t.VariableDeclarator(id, node.expression.arguments[1])]));
        } else if (isBinary(t, node)) {
          var operator = node.expression.arguments[0].value;
          var operatorType = BINARY[operator];
          var id = scope.generateUidIdentifier(operatorType);
  
          scope[operatorType] = id;
  
          path.replaceWith(t.VariableDeclaration("const", [t.VariableDeclarator(id, node.expression.arguments[1])]));
        }
      },
      UnaryExpression: (path) => {
        var node = path.node;
        var scope = path.scope;

        var overload = findOverloadUnary(scope, node.operator);

        if (!overload) {
          return;
        }

        path.replaceWith(t.CallExpression(overload, [node.argument]));
      },
      BinaryExpression: function BinaryExpression(path) {
        var node = path.node;
        var scope = path.scope;

        var overload = findOverloadBinary(scope, node.operator);

        if (!overload) {
          return;
        }

        path.replaceWith(t.CallExpression(
          t.CallExpression(overload, [node.left]),
          [node.right]
        ));
      }
    }
  };
};