module.exports = {
  source: ['package.json', 'packages/*/package.json'],
  versionGroups: [
    {
      dependencies: [
        '@randy.tarampi/js',
        '@randy.tarampi/lambda-logger',
        '@randy.tarampi/serverless',
      ],
      dependencyTypes: ['prod', 'resolutions'],
      isIgnored: true,
    },
    {
      dependencies: ['chai'],
      dependencyTypes: ['dev'],
      policy: 'sameRange',
    },
    {
      dependencies: ['eslint'],
      dependencyTypes: ['dev'],
      policy: 'sameRange',
    },
    {
      dependencies: ['tape'],
      dependencyTypes: ['dev'],
      policy: 'sameRange',
    },
  ],
};
