import { expect as expectCDK, MatchStyle, matchTemplate } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as UniversalNodejsFunction from '../lib/universal-nodejs-function-stack';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new UniversalNodejsFunction.UniversalNodejsFunctionStack(app, 'MyTestStack', {channelId: 'whatever'});
  // THEN
  expectCDK(stack).to(matchTemplate({
    "Resources": {}
  }, MatchStyle.EXACT))
});
