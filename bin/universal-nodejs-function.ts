#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { UniversalNodejsFunctionStack } from '../lib/universal-nodejs-function-stack';

const app = new cdk.App();
new UniversalNodejsFunctionStack(app, 'UniversalNodejsFunctionStack', {channelId: 'whatever'});
