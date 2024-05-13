import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vault API",
  description: "You'll find comprehensive guides and documentation to help you start working with Vault as quickly as possible, as well as support if you get stuck",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FAQ', link: '/FAQ' },
    ],

    sidebar: [
      {
        text: 'General information',
        items: [
          { text: 'API Reference', link: '/introduction' },
          { text: 'Sandbox', link: '/sandbox' }
        ]
      },
      {
        text: 'API Reference',
        items: [
          {
            text: 'Signup', link: '/signup',
            collapsed: true,
            items: [
              { text: 'Registration', link: '/registration' },
              { text: 'Confirm Phone Number', link: 'confirm-phone-number' },
              { text: 'Resend Code', link: '/resend-code' },
              { text: 'Add Email', link: '/add-email' },
              { text: 'Confirm Email', link: '/confirm-email' }
            ]
          },
          {
            text: 'Authorization', link: '/authorization',
            collapsed: true,
            items: [
              { text: 'Signin', link: '/signin' },
              { text: 'Signout', link: '/signout' } 
            ]
          }
        ]
      },
    ],
      
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Saverona/site_api' }
    ]
  }
})
