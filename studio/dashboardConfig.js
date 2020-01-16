export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e203ea01568668f9ae7992a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y938bros',
                  apiId: 'f744952b-3d53-4a80-bb28-4b096850319a'
                },
                {
                  buildHookId: '5e203ea1e9280a874b00cdb7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xsrb3ocv',
                  apiId: '0d57550e-b1fb-4c60-9750-a8e1ddff2b08'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/strangeworlder/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xsrb3ocv.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
