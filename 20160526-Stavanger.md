# Fagkveld Stavanger 2016-05-26

## Tips
* For alle oppgaver - bruk region Irland, eu-west-1, med mindre noe annet angis. Da er det mye lettere med opprydding
* Les oppgaveteksten, en del steder er det maler som hjelper deg med oppsett så du slipper å sette opp alt manuel
* Ta en titt og stopp/slett ting når du er ferdig, fort gjort å glemme noe. Enkleste måten å se om man har glemt noe er å kikke på billing-siden 1-2 dager etter workshopen


## (1A) S3 as webserver

### Oppgave
* Lag en S3-bucket
* Lag en vilkårlig html-fil og last den opp i bucketen
* Forsøk å vise filen
* Sett policy på bucketen så alle filer kan leses av alle (NB! Bucketnavn og path må endres i eksempel-policy)
S3-policy: [s3-bucket.policy](https://github.com/abjoerne/aws-tutorials/blob/master/s3-bucket.policy)

### Opprydding
* Remove bucket

## (1B) Cloudformation og EC2-server
* Cloudformation
  * Se på template https://s3-us-west-2.amazonaws.com/cloudformation-templates-us-west-2/S3_Website_Bucket_With_Retain_On_Delete.template
  * Lage stack: https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=S3RetentionSample&templateURL=https://s3-us-west-2.amazonaws.com/cloudformation-templates-us-west-2/S3_Website_Bucket_With_Retain_On_Delete.template
  * Slett stack
  * Slett bucket

* Last opp din public SSH-key eller lag et nytt nøkkelpar 
* Start en EC2-server (anbefalt t2.micro, Amazon linux)
  * Gå gjennom wizard se på default verdier
* Logg evt. inn på server med ssh (user: ec2-user)
* Terminer server



## (2) Elastic beanstalk:
NB! Noen kontoer har ny UI på noen områder, bl.a. Beanstalk. Stegene under stemmer ikke, så gå evt. gjennom og kjør configurering etterpå.
### Oppgave
* Start en Beanstalk-stack vha. Create New Application oppe i høyre hjørne
  * Velg *webserver environment*
  * Velg *PHP* og *Load balancing*
  * Kopier inn S3-url: https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/HelloAWS.zip
  * Velg *environment name* og *URL*
  * Velg: *Create environment inside VPC*
  * Velg: *Instans-type* t2.micro, sett *connection draining* til 5 sec
  * Valgfritt - legg inn tag
  * Kryss av alle for *ELB* og *EC2*
  * Fortsett til *Launch*

### Ting å leke med og se på
* Se at applikasjonen virker ved å åpne URL, eventuelt åpne port 80 i security-grpup (menyvalg EC2)
* Gå til *EC2* i consolet: se på servere, volumes, loadbalancer, autoscaling
* Gå tilbake til applikasjonen i consolet
  * Under *load balancing* endre *health check interval* til 6 sekunder, *healthy count* og *unhelathy count* til 2. Og vent på oppdateringen blir ferdig
  * Under *scaling* sett *minimum* 3 og *maximum* 6 og *scaling cooldown* til 30
* Se på hvordan EC2 og loadbalancer legger inn nye servere
* Terminer en av EC2-instansene og se hva som skjer (se på loadbalancer, serverlist, at applikasjonen virker)
* Deploy versjon 2 av applikasjonen https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/HelloAWS2.zip
  * Velg *Upload and deploy*
  * Sjekk at applikasjonen virker, se evt. på hvordan loadbalancer jobber
* Lek evt. mer med å bytte applikasjonsversjoner, se på scaling-parametre, bytt servertype fra t2.micro til t2.nano m.v.
* For de avanserte: se på scaling-policy og skriv eks. en applikasjon som trekker mye CPU

### Opprydding
* Når ferdig gå på *Beanstalk*-forsiden og velg *delete application*
  
###Linker til applikasjon for nedlasting
* https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/HelloAWS.zip
* https://s3-eu-west-1.amazonaws.com/anders-aws-bucket/awsdemo/HelloAWS2.zip


## (3) API-gateway and Lambda

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


## (4) S3, SNS and Lambda with Cloudformation
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



