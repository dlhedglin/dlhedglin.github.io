module.exports = {
  siteMetadata: {
    title: `Devan L. Hedglin`,
    siteUrl: `https://nehalem.netlify.com`,
    description: `~/%TOPICS%`,
    topics: [`home`, `post`],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Example',
        path: '/page'
      },
    ],
    search: true,
    author: {
      name: `Devan`,
      description: `I'm <strong>Devan</strong>`,
      social: {
        facebook: ``,
        twitter: ``,
        linkedin: `https://www.linkedin.com/in/devan-hedglin-5b9b7419a/`,
        instagram: `https://www.instagram.com/devan.l.h/`,
        youtube: ``,
        github: `https://github.com/dlhedglin`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#8f41e1`,
          display: `minimal-ui`,
          icon: `content/assets/images/logo.png`
        }
      }
    }
  ]
};
