# Trondheim 2017-11-07

## Tutorial #1
Intention is to protect your account
* Assigning MFA to user
  * Take a look in IAM
  * Set MFA on the IAM-user (or root account)

## Tutorial #2
Intention is to protect your account with an audit log

* Check out cloud-trail, enable if not enabled

## Tutorial #3
Intention is to use S3 to host webpages. 

* Make a simple webserver
  * Make a bucket in S3
  * Configure it to act as a webserver
  * Upload some content (html, img…)

Hints:
* Bucket policy
* Static Website Hosting

Cleanup: Remove bucket

## Tutorial #4
This tutorial set up a load balanced redundant web-envronment in PHP. Use this to explorer how loadbalancing and autoscaling works. After the system is up and running, check out the setup of Loadbalancers and Autoscaling in the EC2-console. Also try to adjust number og hosts, shutdown a host etc. Whan you have more than one server running, deloy a new versjon of the application.

(The following applies to the new web-interface)
* Start a Beanstalk-stack 
  **via “Create New Application”**
* Create environment
  * webserver environment
  * PHP and upload application (zip-file)
    * application 
      * https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/HelloAWS.zip
      * https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/HelloAWS2.zip
  * **Configure more**
    * High availability
    * Instance type t2.micro
    * Capacity 
      * min 3, max 6 servers
    * network
      * create environment inside VPC
      * select all subnets for ELB og EC2
      * make load balancer public available (public IPs for LB and servers)
  * Create environemnt  (takes aprox 5 mins, have a beer or a cofee...)
  
Things to try and see:
  * Check settings for loadbalancer and autoscaling on EC2-console
  * Open the application in a browser-windows (or more). The page will reload ever 5 sec. 
  * Adjust number of servers
  * Deploy a new version of the app 
  * Shutdown a server (EC2-console)
  * Change to antother instance-type

## Tutorial #5
Set up a serverless event-driven system for processing files:
https://github.com/awslabs/lambda-refarch-fileprocessing


## Tutorial #6
Set up a photo-album with automatic resize of photos and tagging of content
https://github.com/awslabs/lambda-refarch-imagerecognition


