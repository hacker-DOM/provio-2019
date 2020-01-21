/* eslint-disable */
const { UNARY, BINARY } = require('./operators')

const UNARY_OPERATOR_DEFINITION = 'un'
const BINARY_OPERATOR_DEFINITION = 'bi';

const isUnary = (t, node) => {
  return t.isCallExpression(node.expression) &&
    t.isIdentifier(node.expression.callee) &&
    node.expression.callee.name === UNARY_OPERATOR_DEFINITION &&
    node.expression.arguments[0] != null &&
    t.isLiteral(node.expression.arguments[0]) &&
    node.expression.arguments[0].quasis &&
    UNARY[node.expression.arguments[0].quasis[0].value.raw] !== undefined;
}

const isBinary = (t, node) => {
  return t.isCallExpression(node.expression) &&
    t.isIdentifier(node.expression.callee) &&
    node.expression.callee.name === BINARY_OPERATOR_DEFINITION &&
    node.expression.arguments[0] != null &&
    t.isLiteral(node.expression.arguments[0]) &&
    node.expression.arguments[0].quasis &&
    BINARY[node.expression.arguments[0].quasis[0].value.raw] !== undefined;
  }

const findOverloadUnary = (scope, operator) => {
  const type = UNARY[operator];

  while (scope) {
    if (scope[type]) { return scope[type]; }
    scope = scope.parent;
  }
}

const findOverloadBinary = (scope, operator) => {
  const type = BINARY[operator];

  while (scope) {
    if (scope[type]) { return scope[type]; }
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
          const operator = node.expression.arguments[0].quasis[0].value.raw
          var operatorType = UNARY[operator];
          var id = scope.generateUidIdentifier(operatorType);

          scope[operatorType] = id;

          path.replaceWith(
            t.FunctionDeclaration(
              id,
              [
                t.Identifier (
                  "x"
                )
              ],
                t.BlockStatement (
                  [
                    t.ReturnStatement (
                      t.CallExpression (
                        node.expression.arguments[1],
                        [
                          t.Identifier (
                            "x"
                          )
                        ]
                      )
                    )
                  ]
                )
            )
          );
        } else if (isBinary(t, node)) {
          const operator = node.expression.arguments[0].quasis[0].value.raw
          var operatorType = BINARY[operator];
          var id = scope.generateUidIdentifier(operatorType);

          scope[operatorType] = id;

          path.replaceWith(
            t.FunctionDeclaration(
              id,
              [
                t.Identifier (
                  "x"
                ),
                t.Identifier (
                  "y"
                )
              ],
                t.BlockStatement (
                  [
                    t.ReturnStatement (
                      t.CallExpression (
                        node.expression.arguments[1],
                        [
                          t.Identifier (
                            "x"
                          ),
                          t.Identifier (
                            "y"
                          )
                        ]
                      )
                    )
                  ]
                )
            )
          );
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

        path.replaceWith(t.CallExpression(overload, [node.left, node.right]))
      }
    }
  };
};