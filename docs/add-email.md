# Add Email

`PUT` **/v2/mobile/email/add**

This endpoint is designed for adding a new email address to a user's account.

::: warning
Changing the email address manually by the user is not available.

The email address can only be changed through customer support.
:::

## Request

### Body

**Media Type:** `application/json`

- **email**: string *(required)*
  - The new email address to be added to the user's account.

```json 
{
  "email": {
    "type": "string",
    "description": "The new email address to be added to the user's account.",
    "required": true
  }
}
```
### **Example body**
  
```json
{
  "email": "partner@gmail.com"
}
```

## Responses

::: details 200 - Success Response

The response status code indicates that the request was successfully processed.
  
**Media type:** `application/json`
  
- **result**: string
  - Response indicating the result of the operation.

  
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

::: details 168 - The system checks the uniqueness of the email


Email uniqueness verification in the system involves checking whether an email address is already registered. After confirming the email, attempting to register the same email address will result in a message stating that such an address already exists.
  
**Media type:** `application/json`
  

- **message**: string
  - Message that will be displayed to the user.
  
- **errorId**: integer
  - Integer identifier of the error.
  
- **systemId**: string
  - Identifier of the component.
  
- **error**: string
  - Identifier of the error.

    
**Responses example**

```json
{
  "error": "EMAIL_IS_ALREADY_REGISTERED",
  "errorId": 168,
  "message": "Email is already registered",
  "systemId": "core"
}
```

::: 


::: details 310 - The system detects that the email has already been confirmed


The system detects that the email has already been confirmed When attempting to confirm an email address, the system verifies whether the email has already been confirmed in the past. If the email has been previously confirmed, a message is returned instructing the user to contact support in order to change the email.
  
**Media type:** `application/json`
  

- **message**: string
  - Message that will be displayed to the user.
- **errorId**: integer
  - Integer identifier of the error.
- **systemId**: string
  - Identifier of the component.
- **error**: string
  - Identifier of the error.
    
**Responses example**

```json
{
  "error": "EMAIL_ALREADY_CONFIRMED",
  "errorId": 310,
  "message": "Your email has been previously confirmed. Please contact support to change email",
  "systemId": "core"
}
```
::: 

::: details 422 - The system validates the email format

When a user submits an email address, the system checks whether it conforms to the standard email format. If the email address provided doesn't meet the required format, the system returns an error message indicating that the email is not valid.
  
**Media type:** `application/json`
  

- **message**: string
  - Message that will be displayed to the user.
  
- **errorId**: integer
  - Integer identifier of the error.
  
- **systemId**: string
  - Identifier of the component.
  
- **error**: string
  - Identifier of the error.

    
**Responses example**

```json
{
  "error": "NOT_VALID_REQUEST_DATA",
  "field": "email",
  "errorId": 422,
  "message": "Please enter a valid email",
  "systemId": "core"
}
```

::: 
