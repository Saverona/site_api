# Authorization

The `Authorization` section in Vault is designed to manage user authentication and authorization. This section ensures secure access to the system's functionality by overseeing the processes of [SignIn](https://api-vault.readme.io/docs/signin-process) and [SignOut](https://api-vault.readme.io/docs/logout-process).

---

This section provides two endpoints that enable the following actions:

- **User Authentication:** This process is facilitated by the [`POST /oauth/token`](https://api-vault.readme.io/reference/signin) endpoint. Specifically designed for user authentication, it generates an OAuth access token upon successful authentication, allowing secure requests to resources.

- **User Logout:** The [`POST /signout`](https://api-vault.readme.io/reference/signout) endpoint is intended for user logout and the invalidation of access tokens. Upon calling this endpoint, the server deauthorizes the user and invalidates the current access token.

These endpoints play a crucial role in user authentication and session management within the system.