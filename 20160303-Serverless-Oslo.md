#Serverless-workshop Oslo 2016-03-03

## (1) S3 as webserver

Based on https://github.com/awslabs/aws-js-s3-explorer
* Example https://anders-aws-tmp.s3-eu-west-1.amazonaws.com/filestore/index.html
* Make it work

Cleanup notes: Remove bucket


## (2) S3, SNS and Lambda with Cloudformation
Based on https://github.com/awslabs/lambda-refarch-fileprocessing and https://aws.amazon.com/blogs/compute/fanout-s3-event-notifications-to-multiple-endpoints/

File references
* Reference architecture: https://s3.amazonaws.com/awslambda-reference-architectures/file-processing/lambda-refarch-fileprocessing.pdf
* Template-file can be seen here: https://s3.amazonaws.com/awslambda-reference-architectures/file-processing/lambda_file_processing.template
* Lambda 1: https://s3.amazonaws.com/awslambda-reference-architectures/file-processing/data-processor-1.zip
* Lambda 2: https://s3.amazonaws.com/awslambda-reference-architectures/file-processing/data-processor-2.zip

Task
* Set up the stack
* Add a subscription to SNS so you get a notification via email (there are two options, check out both)
* Check out in console
  * Cloudformation: outut, resources, events...
  * S3: Events in input-bucket
  * Lambda: config etc.
  * Cloudwatch: check under "Logs"
  * IAM. Look at lambda-role's policy document (what does it do?) 
* What else can you use this architecture for?

Cleanup notes: Empty buckets, remove SNS-subscriptions, remove log-groups, delete stack

## (3) Lambda, Kinesis

## (4) Slack-demo: Lambda and API-gateway

## (5) Video-demo

