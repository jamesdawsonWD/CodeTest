# Super Awesome Code Test 

### @author James dawson

# Known issues on the version

* Bucket triggering and processing file and then on next trigger a failure to write error appears, need more time for debugging. Believe that the bucket my be triggering again when the findAnagrams function is writing back into the bucket
* In serverless.yaml at the bottom with recourses - s3 is being created but the trigger to findAnagrams is not being added in deploy. Manually adding it is the current work around.




## Deploying the front end

Navigate to src folder and run 

```
npm i && ng serve
```

If you want a production build with aot, no source maps etc

```
npm run build 
```
## Deploying the serverless infastructure

This is currently deployed for you.

However, if you would like to deploy this serverless infastructure on your own AWS account you can do so.

Firstly you will need to install 

```
npm install -g aws-cli
```

then run 

```
aws configure
```

and follow the steps adding in your secret and access key and this should build the exact instance that we have currently deployed on your own AWS account.

**NOTE:** on this current version, we were having an issue getting the s3 to trigger and had to manually do so. This is to be fixed in the next version.


## Running unit tests

Front end: navigate into src 

```
npm run test
```

Server: navigate to server

```
npm run test
```



