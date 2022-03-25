export default {
  widgets: [
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
                  buildHookId: '623d0becbc95df23abefc858',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-2qzcwvpx',
                  apiId: '27572085-b3c4-4731-9aa0-81bd80337c13'
                },
                {
                  buildHookId: '623d0bec3ea3421e209fdcc2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zpdajcqh',
                  apiId: '6513670e-862f-4900-83ed-454990e2b45e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RossThomson/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zpdajcqh.netlify.app', category: 'apps'}
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
