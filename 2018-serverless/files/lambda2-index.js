'use strict';

console.log('Loading function');

const aws = require('aws-sdk');
const doc = require('dynamodb-doc');
const dynamo = new doc.DynamoDB();


const s3 = new aws.S3({ apiVersion: '2006-03-01' });

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));

    const params = {
        Bucket: bucket,
        Key: key,
    };
    s3.getObject(params, (err, data) => {
        var fileContent="";
        if (err) {
            console.log(err);
            const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
            console.log(message);
            callback(message);
        } else {
            console.log('CONTENT TYPE:', data.ContentType);
            if(data.ContentType == "application/json" ){
                var fileContentString = data.Body.toString();
                fileContent=JSON.parse(fileContentString);
                fileContent.timestamp=new Date().getTime();
                var ddbDoc = {"TableName":"anders2","Item":fileContent};
                if (fileContent.comment){
                    console.log("WARNING: "+fileContent.comment);
                }
                dynamo.putItem(ddbDoc,callback);
            }else{
                console.log("Not json-file ",bucket+"/"+key);
                callback("Not json-file",bucket+"/"+key);
            }
        }
    });
};
