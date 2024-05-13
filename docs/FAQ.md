# FAQ

<details>
<summary>1. How to get started with the documentation?</summary>

**Answer:** If you're unsure where to begin with the documentation, we recommend familiarizing yourself with this document: <https://api.vault.ist/docs/getting-started>

</details>

<details>
<summary>2. How to retrieve your x-request-id?</summary>

**Answer:** After executing the request, you need to click the `Headers` button in the response body. This will display all information about the request, including the **x-request-id**.

**Example**

After the request is executed, the user receives a response. The response status code indicates that the request was successfully processed.

```json

{
  "result": "ok"
}
```

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f6f30a6-image.png",
        null,
        ""
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


To obtain additional information about the `RESPONSE`, you need to click on the `Headers` button. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5ffe2bd-image.png",
        null,
        ""
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


</details>

<details>
<summary>3. How to properly compose a support request?</summary>

**Answer:** In your Slack chat, you should compose the request in the following format:

````text
Issue with executing endpoint POST /v2/mobile/phone/confirm

**Request Details:**
- x-request-id: 097d32224c768658ce90860ab082735d
- Date: Mon, 15 Apr 2024 10:54:05 GMT

**Request Body:**
```cURL
curl --request POST \
     --url https://api.vault.sandbox.testessential.net/v2/mobile/phone/confirm \
     --header 'X-Merchant-ID: bece038f-2e46-49f4-b25e-89cd38d6dc16' \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "phone": "+447871234567",
  "smsCode": "1234",
  "fingerprint": "12344444"
}
' 

**Error Response Body**:
{  
  "message": "Sorry for inconvenience. We're fixing the issue. If you have urgent questions, contact support",  
  "errorId": 0,  
  "systemId": "core",  
  "error": "COMMON"  
}  
````

</details>