import { NodejsFunction, NodejsFunctionProps } from "@aws-cdk/aws-lambda-nodejs";
import { Construct } from "@aws-cdk/core";

export interface UniversalNodejsFunctionProps extends NodejsFunctionProps {
  transform: string;
  completion: string;
}

export class UniversalNodejsFunction extends NodejsFunction {

  constructor(scope: Construct, id: string, props: UniversalNodejsFunctionProps) {
    super(scope, id, props);
  }
}
