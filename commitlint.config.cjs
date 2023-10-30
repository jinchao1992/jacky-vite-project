const types = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'release', 'chore', 'revert'];

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [2, 'always', types],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
};

