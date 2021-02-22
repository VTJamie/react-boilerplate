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
