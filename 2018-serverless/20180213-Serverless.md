# Serverless-workshop

The intetntion is to process orders arriving as json-files, storing 
the orders in DynamoDB and sending notification via Slack or email about
incoming orders.

## Process incoming orders with Lambda

* Make a lambda-function
  * triggered by file upload to S3
  * add order to DynamoDB
  
Hint: Use AWS Documentation. Lambda have blueprints for gettings started fast

