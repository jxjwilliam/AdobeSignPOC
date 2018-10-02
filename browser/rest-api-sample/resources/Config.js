/*
 *  Copyright 2016 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 *
 */

(function (root, factory) {
  // Browser globals (root is window)
  if (!root.AdobeSignSdk) {
    root.AdobeSignSdk = {};
  }
  root.AdobeSignSdk.Config = factory();

}(this, function () {
  'use strict';

  var Config = {

    //Access token to allow  the user to authorize API access. It can be generated from  the link 'https://secure.echosign.com/public/static/oauthDoc.jsp'. It must have scopes required by the corresponding samples to grant the API different levels of access to data on behalf of the end user
    "accessToken" : "3AAABLblqZhBzC0C9Y4K7b23ToV7LPvuTP49XOjjGmOIeJDAxjY60ruFcET7mdaj9nbj3la3CERcx7NR-EoMHwv_O3Y0IOrer",

    //First name of the user which will be passed while creating new user
    "userFirstName" : "Ken",

    //Last name of the user which will be passed while creating new user
    "userLastName" : "Feng",

    //Email address of the user which will be used as a sample user while running samples
    "userEmail" : "williamjxj@hotmail.com", ///"ken.m.j.feng@hsbc.com.cn",

    //The userId or email of the user. If it is not specified, then the caller is inferred from the access token
    "xApiUser" : "email:ken.m.j.feng@hsbc.com.cn",

    //The email address of the user whose details are being requested in getUsers method
    "xUserEmail" : "", //"ken.m.j.feng@hsbc.com.cn",

    //Prefix for the group name which will be added while creating group name at runtime using timestamp
    "groupName" : "Default Group",

    //Prefix for the agreement name which will be added while creating agreement name at runtime using timestamp
    "agreementName" : "SampleAgreement",

    //Prefix for the widget name which will be added while creating widget name at runtime using timestamp
    "widgetName" : "SampleWidget",

    //ExternalID for which agreement information is to be retrieved. ExternalId is passed while getting Agreements of the user
    "externalID" : null,

    //ExternalGroup for which agreement information is to be retrieved. ExternalId should be not null if user is passing ExternalGroup parameter
    "externalGroup" : null,

    //ExternalNameSpace for which agreement information is to be retrieved. ExternalId should be not null if user is initializing ExternalNameSpace parameter
    "externalNamespace" : null,

    //The query string used for the search. Multiple search terms can be provided, separated by spaces. Some of the search terms include document name, participant name or company, and form data
    "query" : null,

    //Name of the document with form fields to be used in creating a transient document with form fields
    "inputFormFieldFileName" : "DocumentWithFormFields.pdf",

    //Name of the sample document to be used in creating a transient document
    "inputFileName" : "Sample.pdf",

    //Path structure of directory containing resource files like Sample.pdf, DocumentWithFormFields.pdf, etc
    "requestPath" : "resources",

    //Path structure of parent directory containing output directories
    "outputPath" : "output",

    //Output directory for saving agreement documents
    "agreementDocument" : "agreementDocuments",

    //Output directory for saving audit trail of agreements
    "auditTrail" : "auditTrails",

    //Output directory for saving form data of widgets
    "formData" : "formData",

    //Mime type for pdf files
    "mimeTypePdf" : "application/pdf",

    //If an agreement has status 'OUT FOR SIGNATURE' for following number of days, reminder will be sent to the next participants of the agreement
    "waitingDays" : 1,

    //File offset while writing output in files
    "fileOffset" : 0,

    //Value used to maintain state between the request and callback
    "state" : null,

    //Grant type for fetching the access token. Value must always be 'authorization_code'
    "accessTokenGrantType" : "authorization_code",

    //Grant type for refreshing the access token. Value must always be 'refresh_token'
    "refreshTokenGrantType" : "refresh_token",

    //Response type in the request for making authorization url used to fetch the access token. Value must always be 'code'
    "responseType" : "code",

    //This is the number of agreements for which the samples will run. Set -1/null for all agreements and 0 for no agreements
    "agreementCountLimit" : 1,

    //Environment on which the sdk will run. If no Host Environment is provided here, default Host Environment [https://api.echosign.com/] will be used
    "envHostName" : "https://api.in1.echosign.com/",

    //Prefix of email address which will be used for the sample use
    "userEmailPrefix" : "",

    //Domain of email address which will be used for the sample use
    "userEmailDomain" : ""
  };

  return Config;
}));
