const { awscdk } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mark Washburn',
  authorAddress: 'mark@mrwconsulting.tech',
  cdkVersion: '2.31.0',
  defaultReleaseBranch: 'main',
  majorVersion: 1,
  name: '@mrwconsulting/projen-monorepo',
  packageName: '@mrwconsulting/projen-monorepo',
  repositoryUrl: 'https://github.com/mrwconsulting/projen-monorepo.git',
  npmAccess: NpmAccess.PUBLIC,
  npmRegistryUrl: 'https://npm.pkg.github.com',
  releaseToNpm: true,
  releaseBranches: {
    beta: {
      majorVersion: 1,
      prerelease: true,
      tagPrefix: 'beta',
    },
  },
});
project.synth();