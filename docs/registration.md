# Registration of a new user

`POST` **/v2/mobile/signup**

This endpoint is designed for [registering](https://github.com/crypterium-com/api-vault.wiki.git) a new user in a mobile application or service using a phone number as the primary identifier.

::: danger When re-registering in the system, it is necessary to use a new phone number that has not been used before.
:::

User registration involves providing necessary information such as the phone number and chosen password.

## Request

### Headers

- **X-Merchant-ID**: string *(required)*
  - Identification of requests from users of a specific partner.
  - **Default:** `bece038f-2e46-49f4-b25e-89cd38d6dc16`

- **X-Version**: string *(required)*
  - Version fingerprint.
  - **Default:** `1.2`

- **X-Fingerprint**: string
  - Device fingerprint. Fingerprint for WEB for Android and iOS can be viewed [here](https://github.com/crypterium-com/api-vault.wiki.git).

- **X-Signature**: string
  - Contains a digital signature generated both on the server-side (backend) and the client-side (frontend). Used for verifying the authenticity of requests.


### Body

**Media Type:** `application/json`

### Parameters

>- **phone**: string (*Required*)
>       The phone number needed for registration.

- **password**: string (*Required*)
  - The password required for registration. See password creation rule [here].

- **analyticsCallback**: string 
  - Optional parameter for transmitting analytics data
  
### **Example body**

```json 
{
  "phone": "+447871234567",
  "password": "1234Qwerty",
  "analyticsCallback": "string"
}
```


## Responses

::: details 200 - Success Response
  
The response status code indicates that the request was successfully processed.
  
**Media type:** `application/json`
  
- **result:** string
  - Provides information about the outcome of the registration operation.
  
**Responses example**
```json
{
  "result": "ok"
}
```
:::

::: details 400 - Bad Request

The response status code indicates that the requested page was not found on the server.
  
**Media type:** `application/json`

  
- **message:** string
  - Message displayed to the user.
  
- **field:** string
  - Specifies the field in the request that caused the error.
  
- **errorId:** integer
  - Identifier of the error.
  
- **systemId:** string
  - Identifier of the component.
  
- **originalMessage:** string
  - The original error message.
  
- **errorStackTrace:** string
  - The place where the error occurred in the code.
  
- **data:** object
  - Additional data related to the error, structured as key-value pairs.
    - **additionalProp1:** object
    - **additionalProp2:** object
    - **additionalProp3:** object
  
- **error:** string
  - Identifier of the error.

    
**Responses example**

```json
{
  "error": "COMMON",
  "errorId": 0,
  "message": "Sorry for inconvenience. We're fixing the issue. If you have urgent questions, contact support",
  "systemId": "core"
}
```
:::

::: details 403 - Account Duplication (Phone Number Uniqueness Check)
  
Errors related to account duplication and phone number uniqueness check.
 
If a user attempts to register with a phone number already in the database, they will not receive an error message during the waiting period for SMS confirmation. This is a security measure to prevent unauthorized access to accounts.
:::

