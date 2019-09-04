/* eslint-disable */
const { UNARY, BINARY } = require('./operators')

const UNARY_ALIAS = 'un'
const BINARY_ALIAS = 'bi';

const is = (t, {expr}, OPS, ALIAS) => {
  return t.isCallExpression(node.expression) &&
    t.isIdentifier(node.expression.callee) &&
    node.expression.callee.name === ALIAS &&
    node.expression.arguments[0] != null &&
    t.isLiteral(node.expression.arguments[0]) &&
    node.expression.arguments[0].value in OPS;
}

const isBinary = (t, node) => {
  return t.isCallExpression(node.expression) &&
    t.isIdentifier(node.expression.callee) &&
    node.expression.callee.name === BINARY_ALIAS &&
    node.expression.arguments[0] != null &&
    t.isLiteral(node.expression.arguments[0]) &&
    node.expression.arguments[0].value in BINARY;
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
        } else if (is(t, node, LOGICAL, LOGICAL_ALIAS)) {
          const op = node.expression.arguments[0].value;
          const opType = LOGICAL[op];
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
      // UpdateExpression({node, scope, replaceWith}) {
        // const overload = findOverload(scope, node.operator, UPDATE);

        // overload
        // ? replaceWith(t.CallExpression(overload, [node.argument]))
        // : null
      // },
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