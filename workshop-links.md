# Tutorial-links for workshops

## EC2, loadbalancing and beanstalk

Spin up a php application manually in Beanstalk. Here are two small php-applications only displaying version-number and IP of the server it runs on if you don't have your own
* https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/HelloAWS.zip
* https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/HelloAWS2.zip

## Lambda and step-fuctions
This gives you a good look into a lot of serverless components like Lambda, Step Functions, S3, Rekognition as well as DynamoDB and a small Node.js application 
* https://github.com/awslabs/lambda-refarch-imagerecognition

## Kinesis
This stack spins up threee EC2-servers (producer, consumer, webserver) and DynamoDB. Producer have 10 threads, each writing randum number 1-6 evry 100ms. Consumer reads Kinesis streams every 1000ms and write to database, and also aggregates last 10.000ms. Webserver give you a nice live view.

vpcId and subnetId (with public IP) needed for input to this template to get things up and running: 
* https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/kinesis-trippelservers-v2.template
* [![Launch into eu-west-1 with CloudFormation](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/images/cloudformation-launch-stack-button.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=kinesis-demo&templateURL=https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/kinesis-trippelservers-v2.template)

