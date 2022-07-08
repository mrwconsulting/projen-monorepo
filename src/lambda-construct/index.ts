import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Duration } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';

/**
 * A CDK construct to create Lambda functions.
 */
export class LambdaConstruct extends Construct {
  constructor(parent: Construct, name: string) {
    super(parent, name);

    // most simple function with static inline code that prints the event and calls the callback function
    new Function(this, 'InlineFunction', {
      runtime: Runtime.NODEJS_12_X,
      code: Code.fromInline('exports.handler = function (e, ctx, cb) { console.log("Event: ", e); cb(); };'),
      handler: 'index.handler',
      timeout: Duration.seconds(10),
    });
  }
}