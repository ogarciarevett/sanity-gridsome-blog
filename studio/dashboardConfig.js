export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d94c12177aa1d51e78a8c91',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-bu9t5941',
                  apiId: 'f715af36-12b0-46b3-98e3-c2d8c1b8d3ce'
                },
                {
                  buildHookId: '5d94c12164b2514d4f2f2c3e',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-tg5xxwad',
                  apiId: '683f915f-35a9-4cc7-b7b9-1e9cc77be356'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ogarciarevett/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-tg5xxwad.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
