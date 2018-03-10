var AWS = require('aws-sdk');
AWS.config.update({region: 'YOUR_AWS_SES_REGION'});

var params = {
	Destination: { 
	    CcAddresses: [],
	    ToAddresses: ['YOUR_DESTINATION_EMAIL']
	},
	Source: 'YOUR_SOURCE_EMAIL', 
	Template: 'default_email_template', 
	TemplateData: "{ \"username\":\"" + "Rodrigo" + "\"}",
	ReplyToAddresses: ['YOUR_SOURCE_EMAIL'],
};
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendTemplatedEmail(params).promise();
sendPromise.then(function(data) {
	console.log(data);
}).catch(function(err) {
    console.error(err, err.stack);
});