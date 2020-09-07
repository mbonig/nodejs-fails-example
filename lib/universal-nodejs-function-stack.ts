import { Construct, Stack, StackProps } from "@aws-cdk/core";
import { NodejsFunction } from "@aws-cdk/aws-lambda-nodejs";

interface UniversalNodejsFunctionStackProps extends StackProps {
  channelId: string;
}

export class UniversalNodejsFunctionStack extends Stack {
  constructor(scope: Construct, id: string, props: UniversalNodejsFunctionStackProps) {
    super(scope, id, props);

    new NodejsFunction(this, 'notification', {
      environment: {
        CHANNEL_ID: props.channelId
      }
    });
  }
}
