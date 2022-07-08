const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mark Washburn',
  authorAddress: 'mark@mrwconsulting.tech',
  cdkVersion: '2.31.0',
  defaultReleaseBranch: 'main',
  name: '@mrwconsulting/projen-monorepo',
  packageName: '@mrwconsulting/projen-monorepo',
  repositoryUrl: 'https://github.com/mrwconsulting/projen-monorepo.git'
});
project.synth();