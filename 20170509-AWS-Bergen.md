# AWS meetup Bergen 2017-05-09

## Excercise #1
* Assigning MFA to user
  * Take a look in IAM
  * Set MFA on the root account

## Excercise #2
* Turn on and check out cloud-trail

## Excercise #3
* Make a simple webserver
  * Make a bucket in S3
  * Configure it to act as a webserver
  * Upload some content (html, img…)
Hints:
* Bucket policy
* Static Website Hosting

Cleanup: Remove bucket

## Excercise #4
* Start a Beanstalk-stack via “Get Started”
  * webserver environment
  * PHP and Load balancing
  * application 
    * https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/HelloAWS.zip
  * Configure more
    * high availability
    * environment name and URL
    * Instance-type t2.micro
    * network
      * create environment inside VPC
      * select subnets for ELB og EC2
      * make public available
  * Launch

## Excercise #5
Set up a serverless event-driven system for processing files:
https://github.com/awslabs/lambda-refarch-fileprocessing

## Excercise #6
Set up a photo-album with automatic resize of photos and tagging of content
https://github.com/awslabs/lambda-refarch-imagerecognition

