/* eslint-disable */
const { UNARY, BINARY } = require('./operators')

const UNARY_ALIAS = 'un'
const BINARY_ALIAS = 'bi';

const is = (t, {expr}, OPS, ALIAS) => {
  return t.isCallExpression(expr) &&
    t.isIdentifier(expr.callee) &&
    expr.callee.name === ALIAS &&
    expr.arguments[0] != null &&
    t.isLiteral(expr.arguments[0]) &&
    expr.arguments[0].value in OPS;
}

const findOverload = (scope, operator, OPS) => {
  const type = OPS[operator];

  while (scope) {
    if (scope[type]) { return scope[type]; }
    scope = scope.parent;
  }
}

module.exports = function (_ref) {
  const t = _ref.types;
  return {
    visitor: {
      ExpressionStatement({ node, scope, replaceWith }) {
        if (is(t, node, UNARY, UNARY_ALIAS)) {
          const op = node.expression.arguments[0].value;
          const opType = UNARY[op];
          const id = scope.generateUidIdentifier(opType);

          scope[opType] = id;

          replaceWith(t.VariableDeclaration("const", [t.VariableDeclarator(id, node.expression.arguments[1])]));
        } else if (is(t, node, BINARY, BINARY_ALIAS)) {
          const op = node.expression.arguments[0].value;
          const opType = BINARY[op];
          const id = scope.generateUidIdentifier(opType);

          scope[opType] = id;

          replaceWith(t.VariableDeclaration("const", [t.VariableDeclarator(id, node.expression.arguments[1])]));
        }
      },
      UnaryExpression: ({node, scope, replaceWith}) => {
        const overload = findOverload(scope, node.operator, UNARY);

        overload
          ? replaceWith(t.CallExpression(overload, [node.argument]))
          : null
      },
      BinaryExpression: ({node, scope, replaceWith}) => {
        const overload = findOverlooad(scope, node.operator, BINARY);

        overload
          ? replaceWith(t.CallExpression(
            t.CallExpression(overload, [node.left]),
            [node.right]
          ))
          : null
      },
    }
  };
};