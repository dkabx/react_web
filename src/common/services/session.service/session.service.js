import awsConfig from 'config/aws.config';
import { Config, CognitoIdentityCredentials } from 'aws-sdk';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser,
} from 'amazon-cognito-identity-js';
import 'amazon-cognito-js';

let AWS = {}
Config.region = awsConfig.region;
AWS.region = awsConfig.region;
const userPool = new CognitoUserPool(awsConfig.pool);


Config.region = awsConfig.region;
Config.credentials = new CognitoIdentityCredentials({
    IdentityPoolId: awsConfig.IdentityPoolId
});

const userPool = new CognitoUserPool(awsConfig.pool);

/*
* Not so great file as we have callback. Not ideal. Keep this file free unless it is very critical
*/
export function authenticateUser(username, password, cb) {
  const authenticationDetails = new AuthenticationDetails({ email: username, Password: password });
  const userData = { Username: username, Pool: userPool };
  const cognitoUser = new CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      const Logins = {};
      Logins[`cognito-idp.${awsConfig.region}.amazonaws.com/${awsConfig.pool.UserPoolId}`] = result.getIdToken().getJwtToken();
      AWS.credentials = new CognitoIdentityCredentials({
        IdentityPoolId: awsConfig.IdentityPoolId,
        Logins,
      });
      AWS.credentials.refresh((error) => {
        if (error) {
          console.error(error); // eslint-disable-line
        } else {
          cb(false, { session: JSON.parse(JSON.stringify(result)), user: cognitoUser });
        }
      });
    },
    onFailure: (err) => {
      cb(err, null);
    },
  });
  global.cognitoUser = cognitoUser;
}

export function RegisterUser(username,password,user) {
    const attributeList = [
        new CognitoUserAttribute(user)
    ];
    userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

    });
}