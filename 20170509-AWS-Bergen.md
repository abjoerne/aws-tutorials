# AWS meetup Bergen 2017-05-09

## Excercise #1
Intention is to protect your account
* Assigning MFA to user
  * Take a look in IAM
  * Set MFA on the root account

## Excercise #2
Intention is to protect your account with an audit log

* Turn on and check out cloud-trail

## Excercise #3
Intention is to use S3 to host webpages. 

* Make a simple webserver
  * Make a bucket in S3
  * Configure it to act as a webserver
  * Upload some content (html, img…)
Hints:
* Bucket policy
* Static Website Hosting

Cleanup: Remove bucket

## Excercise #4
This tutorial set up a load balanced redundant web-envronment in PHP. Use this to explorer how loadbalancing and autoscaling works. After the system is up and running, check out the setup of Loadbalancers and Autoscaling in the EC2-console. Also try to adjust number og hosts, shutdown a host etc. Whan you have more than one server running, deloy a new versjon of the application.

* Start a Beanstalk-stack via “Get Started”
  * webserver environment
  * PHP and Load balancing
  * application 
    * https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/HelloAWS.zip
    * https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/HelloAWS2.zip
  * Configure more
    * high availability
    * environment name and URL
    * Instance-type t2.micro
    * network
      * create environment inside VPC
      * select subnets for ELB og EC2
      * make public available
  * Launch
  * Open the application in a browser-windows (or more). The page will reload ever 5 sec. 
   * Adjust number of servers
   * Deploy a new version of the app 
   * Shutdown a server (EC2-console)

## Excercise #5
Set up a serverless event-driven system for processing files:
https://github.com/awslabs/lambda-refarch-fileprocessing

## Excercise #6
Set up a photo-album with automatic resize of photos and tagging of content
https://github.com/awslabs/lambda-refarch-imagerecognition

