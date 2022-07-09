const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mark Washburn',
  authorAddress: 'mark@mrwconsulting.tech',
  cdkVersion: '2.31.0',
  defaultReleaseBranch: 'main',
  name: '@mrwconsulting/projen-monorepo',
  packageName: '@mrwconsulting/projen-monorepo',
  repositoryUrl: 'https://github.com/mrwconsulting/projen-monorepo.git',
  npmAccess: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  npmTokenSecret: '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',
  releaseToNpm: true,
  github: false,
});
project.synth();