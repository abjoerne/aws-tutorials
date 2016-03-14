#Serverless-workshop Oslo 2016-03-03

## (1) S3 as webserver

Based on https://github.com/awslabs/aws-js-s3-explorer

### Task

* Make it work - go here to start https://github.com/awslabs/aws-js-s3-explorer

Example can be seen here https://anders-aws-tmp.s3-eu-west-1.amazonaws.com/filestore/index.html

S3-policy: [s3-bucket.policy](https://github.com/abjoerne/aws-tutorials/blob/master/s3-bucket.policy)

### Cleanup notes
Remove bucket


## (2) S3, SNS and Lambda with Cloudformation
Based on https://github.com/awslabs/lambda-refarch-fileprocessing and https://aws.amazon.com/blogs/compute/fanout-s3-event-notifications-to-multiple-endpoints/

### Task
* Set up the stack (must be in US-EAST-1)
* Add a subscription to SNS so you get a notification via email (there are two options, check out both)
* Check out in console
  * Cloudformation: output, resources, events...
  * S3: Events in input-bucket
  * Lambda: config etc.
  * Cloudwatch: check under "Logs"
  * IAM. Look at lambda-role's policy document (what does it do?) 
* What else can you use this architecture for?


### File references
* Reference architecture: https://s3.amazonaws.com/awslambda-reference-architectures/file-processing/lambda-refarch-fileprocessing.pdf
* Template-file can be seen here: https://s3.amazonaws.com/awslambda-reference-architectures/file-processing/lambda_file_processing.template
* Lambda 1: https://s3.amazonaws.com/awslambda-reference-architectures/file-processing/data-processor-1.zip
* Lambda 2: https://s3.amazonaws.com/awslambda-reference-architectures/file-processing/data-processor-2.zip

### Cleanup notes 
Empty buckets, remove SNS-subscriptions, remove log-groups, delete stack

## (3) API-gateway and Lamda

This demonstrates Lambda with API-gateway. You can bootstrap Lambda and role and policy with Cloudformation, then make an API with Lambda as backend.
* Launch stack: https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=lambda-api-gateway-demo&templateURL=https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/lambda_API_processing.template
* Open API Gateway console 
 * Create API
 * Create resource
 * Create method POST
 * Integrationtype Lambda with correct region (eu-west-1) and name
 * Test API in console with empty body
 * Test with body `{"operation":"name", "name":"World" }`
  
 * Deploy API and test with a REST-client

 * Create method GET
 * Same integrations as above
 * Under integration request" add mapping template
 * Type: `application/json`
 * Template: `#set($inputRoot = $input.path('$')){"operation":"ping" }`


### Resources:
* Template: https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/lambda_API_processing.template
* Lambda-function: https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/LambdaAPIDemo.zip

### Cleanup notes
Remove the API you have created and delete the stack

## (4) Lambda, Kinesis, S3, DynamoDB

Reference architecture for IoT backend using DynamoDB, Kinesis and Lambda (no EC2s). EMR and Redshift in the diagram is not part of the tutorial. https://github.com/awslabs/lambda-refarch-iotbackend

NOTE! Read the cleanup-guide when cleaning up

## (5) Slack-demo: Lambda and API-gateway
There are Lambda blueprints for both sending messages to Slack and getting comands from slack. This tutorial also demonstrates the use of KMS (Key Management Service) for encrypting the Slack-token.

* Create a slack-team (or use a team where you can config plugins)
* Create Lambda based on blueprints and read instrcutions in the script

## (6) Slack + Video-demo
Pushing notifications to Slack. See blueprint, and user S3 and Elastic Transcoder to implement.


