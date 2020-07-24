import { Construct, Stack, StackProps, Duration } from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
import { CloudFrontWebDistribution, CloudFrontAllowedMethods, OriginAccessIdentity, LambdaEdgeEventType } from '@aws-cdk/aws-cloudfront';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import { Function, S3Code, Runtime } from '@aws-cdk/aws-lambda';

export interface WebsiteStackProps extends StackProps {
  webRoot: string,
  webDistributionFolder: string
}

export class WebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props: WebsiteStackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'website-bucket');
    new BucketDeployment(this, 'website-deploy-dist', {
      destinationBucket: bucket,
      destinationKeyPrefix: props.webRoot,
      sources: [
        Source.asset(props.webDistributionFolder)
      ]
    });

    const accessIdentity = new OriginAccessIdentity(this, 'cloudfront-access-identity');

    const restFunction = new Function(this, 'request-handler', {
      code: S3Code.fromInline(`
      exports.handler =  async function(event, context, callback) {
        callback(null, 'THIS IS MY RESPONSE');
      }
      `),
      handler: 'index.handler',
      runtime: Runtime.NODEJS_12_X,
      memorySize: 128,
      timeout: Duration.seconds(5)
    });

    bucket.grantRead(accessIdentity);

    const distribution = new CloudFrontWebDistribution(this, 'web-distribution', {
      originConfigs: [
        {
          originPath: `/${props.webRoot}`,
          behaviors: [
            {
              allowedMethods: CloudFrontAllowedMethods.ALL,
              compress: true,
              isDefaultBehavior: true
            },
            {
              compress: true,
              allowedMethods: CloudFrontAllowedMethods.ALL,
              lambdaFunctionAssociations: [
                {
                  eventType: LambdaEdgeEventType.VIEWER_REQUEST,
                  lambdaFunction: restFunction.currentVersion,
                }
              ],
              pathPattern: '/rest/*'
            }
          ],
          s3OriginSource: {
            s3BucketSource: bucket,
            originAccessIdentity: accessIdentity
          }
        }
      ]
    });

    
  }
}
