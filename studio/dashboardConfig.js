export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '626cbc5914958c2cd0f18252',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-1e1pfmrg',
                  apiId: 'cda99cdc-d13a-48d9-bdff-2a6700529a87'
                },
                {
                  buildHookId: '626cbc5914958c2cd0f18253',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-jid3vbku',
                  apiId: '549be9a3-f01b-4213-ad98-c73af47b7ef3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikeyhodl/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-jid3vbku.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
