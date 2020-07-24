import { CloudFormationCustomResourceEvent, CloudFrontResponseCallback, Context, CloudFrontRequestCallback } from 'aws-lambda';
export const handler = (event: CloudFormationCustomResourceEvent, context: Context, callback: CloudFrontResponseCallback) => {
    callback(null, {
        status: "200",
        body: "My Body"
    });
};