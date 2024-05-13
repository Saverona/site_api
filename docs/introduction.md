
# Introduction

Here you will find our API documentation, that will allow you access to our solution’s toolset for virtual and physical card issuance. Using it, you will be able to issue and cancel cards, manage card status, request information about cards, accounts and products, and more.

Rest assured that the entire process is designed with a strong emphasis on security. The system enforces all necessary Know Your Customer (KYC) procedures to ensure that sensitive data remains protected and does not end up where it shouldn't be.

Empower your financial services with Vault API — a secure and versatile solution for managing virtual cards. Dive into the documentation to unleash the full potential of our API and elevate your financial offerings.

---

This API documentation provides comprehensive details on integrating with Vault API for managing virtual and physical cards, among other functionalities. Here's a brief overview of the steps and operations covered in the documentation:

<details>
  <summary>Account Registration</summary>

1. [User registration](https://api-vault.readme.io/reference/create-account)
2. [Phone number verification](https://api-vault.readme.io/reference/confirm-phone-number)
3. [Resend Code](https://api-vault.readme.io/reference/resend-code)

</details>

<details>
  <summary>Email Management</summary>

1. [Add Email](https://api-vault.readme.io/reference/add-email)
2. [Resend email](https://api-vault.readme.io/reference/resend-email)
3. [Confirm Email](https://api-vault.readme.io/reference/confirm-email) 

</details>

<details>
  <summary>User Authentication</summary>

1. [SignIn](https://api-vault.readme.io/reference/signin)
2. [SignOut](https://api-vault.readme.io/reference/signout)

</details>

<details>
  <summary>Account Password Operations</summary>

1. [Password reset request](https://api-vault.readme.io/reference/resend-password)
2. [Confirm password reset](https://api-vault.readme.io/reference/reset-confirm-code)
3. [Set New Password](https://api-vault.readme.io/reference/set-new-password)
4. [Password change](https://api-vault.readme.io/reference/change-password)

</details>

<details>
  <summary>Feature Functionality Management</summary>

1. [Simplified list of operations](https://api.vault.ist/reference/catalog-operations)

</details>

<details>
  <summary>Wallet</summary>

1. [Create Wallets](https://api.vault.ist/reference/create-wallets)
2. [View created wallets](https://api.vault.ist/reference/get-wallets)

</details>

<details>
  <summary>Send</summary>

1. [Validate Send Coins Request to Another Wallet](https://api.vault.ist/reference/validate-send-coins)
2. [Retrieve information about the fee for sending coins](https://api.vault.ist/reference/get-fee)
3. [Send Coins to Another Wallet](https://api.vault.ist/reference/send-coins)

</details>

<details>
  <summary>Profile</summary>

1. [Adding user information](https://api.vault.ist/reference/update-customer-profile)
2. [View user profile](https://api.vault.ist/reference/get-customer-profile)
3. [Update Status of Push Notifications](https://api.vault.ist/reference/update-status-of-push-notifications)

</details>

<details>
  <summary>KYC</summary>

1. [View KYC Status](https://api.vault.ist/reference/status)
2. [Retrieve information about KYC (Know Your Customer) limits](https://api.vault.ist/reference/limits)
3. [Start KYC 1](https://api.vault.ist/reference/start)
4. [Finish KYC 1](https://api.vault.ist/reference/finish)
5. [Upload documents for KYC 2](https://api.vault.ist/reference/kyc-2-1)
6. [KYC 3](https://api.vault.ist/reference/kyc-3)

</details>

<details>
  <summary>PayIn</summary>

1. [Add a card for PayIn](https://api.vault.ist/reference/add-card)
2. [Add a billing address for the card](https://api.vault.ist/reference/add-card-billing-address)
3. [View added cards and rates](https://api.vault.ist/reference/get-available-rates-and-cards-payin)
4. [Get Fiat Rates](https://api.vault.ist/reference/get-fiat-rates)
5. [Create Offer Without Charging Customer](https://api.vault.ist/reference/create-offer-without-charging-customer)
6. [Update Existing Offer Without Charging Customer](https://api.vault.ist/reference/update-existing-offer-without)
7. [Execute Offer Payment (do payment authorization)](https://api.vault.ist/reference/execute-offer-payment)
8. [Provide information about the outcome of a payment operation](https://api.vault.ist/reference/pay-callback)

</details>

<details>
  <summary>PayOut</summary>

1. [Add a Card for PayOut](https://api.vault.ist/reference/add-card-payout)
2. [Add a billing address for the card](https://api.vault.ist/reference/add-card-billing-address)
3. [Get Available Rates and Cards Data for PayOut](https://api.vault.ist/reference/get-available-rates-and-cards-payout)
4. [Create Payout Offer](https://api.vault.ist/reference/create-payout-offer)
5. [Update PayOut Offer](https://api.vault.ist/reference/update-payout-offer)
6. [Execute PayOut Offer](https://api.vault.ist/reference/execute-payout-offer)

</details>

<details>
  <summary>Exchange</summary>

1. [Get Available Currencies for Crypto Exchanges](https://api.vault.ist/reference/get-available-currencies-for-crypto-exchanges)
2. [Create Offer Exchange](https://api.vault.ist/reference/create-offer-exchange)
3. [Update Offer Exchange](https://api.vault.ist/reference/update-offer-exchange)
4. [Execute Offer Exchange](https://api.vault.ist/reference/execute-offer-exchange)

</details>

<details>
  <summary>History</summary>

1. [History Transactions](https://api.vault.ist/reference/history-transactions)
2. [Get Card Operations History](https://api.vault.ist/reference/get-card-operations-history) 

</details>

<details>
  <summary>VISA Card Program</summary>

1. [Get Customer Cards for VISA Program](https://api.vault.ist/reference/get-customer-cards-for-visa)
2. [Get Customer for VISA Card Program Prices](https://api.vault.ist/reference/get-customer-for-visa-card-program-prices) 
3. [Create New Card Request](https://api.vault.ist/reference/create-new-card-request-visa)
4. [Cancel Card Request](https://api.vault.ist/reference/cancel-card-request-visa-card-program)
5. [Additional Personal Info](https://api.vault.ist/reference/additional-personal-info-visa-card-program)
6. [Create Card Order Offer](https://api.vault.ist/reference/create-card-order-offer-visa-card-program)
7. [Pay Card Order Offer](https://api.vault.ist/reference/pay-card-order-offer-visa-card-program)
8. [Get Additional Personal Info](https://api.vault.ist/reference/additional-personal-visa-card-program)
9. [Update Address for Card Request](https://api.vault.ist/reference/update-address-for-card-request-visa-card-program)
10. [VISA Card Program Additional Personal Info Constants](https://api.vault.ist/reference/additional-personal-info-constants-visa-card-program)
11. [Get Card Price for VISA Card Program](https://api.vault.ist/reference/get-card-price-for-visa)
12. [Get Currencies for Card Payload](https://api.vault.ist/reference/get-currencies-for-card-payload)
13. [Get Limits, Fees, and Other Data for Card Payload](https://api.vault.ist/reference/get-limits-fees-and-other-data-for-card-payload-visa)
14. [Create Card Payload Offer](https://api.vault.ist/reference/create-card-payload-offer-visa)
15. [Update Card Payload Offer](https://api.vault.ist/reference/update-card-payload-offer-visa)
16. [Confirm Card Payload Offer](https://api.vault.ist/reference/confirm-card-payload-offer-visa)
17. [Send customer soft block (freeze) sms code](https://api.vault.ist/reference/send-customer-soft-unblock-freeze-sms-code-visa)
18. [Soft block (freeze) card by customer](https://api.vault.ist/reference/soft-block-freeze-card-by-customer-visa)
19. [Send customer soft unblock (unfreeze) sms code](https://api.vault.ist/reference/send-customer-soft-unblock-unfreeze-sms-code-visa)
20. [Customer soft unblock (unfreeze) card](https://api.vault.ist/reference/customer-soft-unblock-unfreeze-card-visa)

</details>