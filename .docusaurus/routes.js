import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/java-spring-boot-notes/__docusaurus/debug',
    component: ComponentCreator('/java-spring-boot-notes/__docusaurus/debug', 'c78'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/__docusaurus/debug/config',
    component: ComponentCreator('/java-spring-boot-notes/__docusaurus/debug/config', '9f7'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/__docusaurus/debug/content',
    component: ComponentCreator('/java-spring-boot-notes/__docusaurus/debug/content', '634'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/__docusaurus/debug/globalData',
    component: ComponentCreator('/java-spring-boot-notes/__docusaurus/debug/globalData', 'de2'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/__docusaurus/debug/metadata',
    component: ComponentCreator('/java-spring-boot-notes/__docusaurus/debug/metadata', 'bd9'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/__docusaurus/debug/registry',
    component: ComponentCreator('/java-spring-boot-notes/__docusaurus/debug/registry', '8ce'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/__docusaurus/debug/routes',
    component: ComponentCreator('/java-spring-boot-notes/__docusaurus/debug/routes', '7ea'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog',
    component: ComponentCreator('/java-spring-boot-notes/blog', 'b48'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/archive',
    component: ComponentCreator('/java-spring-boot-notes/blog/archive', 'b0c'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/authors',
    component: ComponentCreator('/java-spring-boot-notes/blog/authors', 'db8'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/java-spring-boot-notes/blog/authors/all-sebastien-lorber-articles', '70b'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/authors/yangshun',
    component: ComponentCreator('/java-spring-boot-notes/blog/authors/yangshun', 'cdc'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/first-blog-post',
    component: ComponentCreator('/java-spring-boot-notes/blog/first-blog-post', 'd83'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/long-blog-post',
    component: ComponentCreator('/java-spring-boot-notes/blog/long-blog-post', 'efb'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/mdx-blog-post',
    component: ComponentCreator('/java-spring-boot-notes/blog/mdx-blog-post', '1fc'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/tags',
    component: ComponentCreator('/java-spring-boot-notes/blog/tags', '923'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/tags/docusaurus',
    component: ComponentCreator('/java-spring-boot-notes/blog/tags/docusaurus', '613'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/tags/facebook',
    component: ComponentCreator('/java-spring-boot-notes/blog/tags/facebook', 'aec'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/tags/hello',
    component: ComponentCreator('/java-spring-boot-notes/blog/tags/hello', '468'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/tags/hola',
    component: ComponentCreator('/java-spring-boot-notes/blog/tags/hola', 'e57'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/blog/welcome',
    component: ComponentCreator('/java-spring-boot-notes/blog/welcome', 'aa9'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/markdown-page',
    component: ComponentCreator('/java-spring-boot-notes/markdown-page', 'ea1'),
    exact: true
  },
  {
    path: '/java-spring-boot-notes/docs',
    component: ComponentCreator('/java-spring-boot-notes/docs', '093'),
    routes: [
      {
        path: '/java-spring-boot-notes/docs',
        component: ComponentCreator('/java-spring-boot-notes/docs', '30c'),
        routes: [
          {
            path: '/java-spring-boot-notes/docs',
            component: ComponentCreator('/java-spring-boot-notes/docs', '285'),
            routes: [
              {
                path: '/java-spring-boot-notes/docs/category/tutorial---basics',
                component: ComponentCreator('/java-spring-boot-notes/docs/category/tutorial---basics', 'db8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial-basics/congratulations', '1b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial-basics/create-a-blog-post', 'd1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial-basics/create-a-document', '92c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial-basics/create-a-page', 'e47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial-basics/deploy-your-site', '95e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial-basics/markdown-features', '287'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/java-spring-boot-notes/',
    component: ComponentCreator('/java-spring-boot-notes/', 'd41'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
