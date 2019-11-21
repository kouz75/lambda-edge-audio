CloudFormation stack to manipulate audio files with lambda@edge

# reference
https://docs.aws.amazon.com/lambda/latest/dg/build-pipeline.html

# Install

* Create a CloudFormation stack with the template cloudformation.yml the stack must be create in us-east-1 region.
* Sync this repository  with our CodeCommit repository create by CloudFormation
* open index.js and replace **** by the name of the bucket create by CloudFormation
* Push your change to your repository. 
The PipeLine should generate a new version of your lambda function and update CloudFront with the correct Lambda Version.
* Try to open the link https://CLOUDFRONT-domain/1-2-1
CLOUDFRONT-domain is the domaine name of the CloudFront distribution create by CloudFormation.

If everything works fine, you should hear some animals sound 

# todo
* documentation
* unit test
* eslint
* codecommit init from zip file 
