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
    component: ComponentCreator('/java-spring-boot-notes/docs', 'df7'),
    routes: [
      {
        path: '/java-spring-boot-notes/docs',
        component: ComponentCreator('/java-spring-boot-notes/docs', 'a49'),
        routes: [
          {
            path: '/java-spring-boot-notes/docs',
            component: ComponentCreator('/java-spring-boot-notes/docs', 'a3f'),
            routes: [
              {
                path: '/java-spring-boot-notes/docs/category/tutorial',
                component: ComponentCreator('/java-spring-boot-notes/docs/category/tutorial', 'f91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/intro',
                component: ComponentCreator('/java-spring-boot-notes/docs/intro', '3a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/markdown-features',
                component: ComponentCreator('/java-spring-boot-notes/docs/markdown-features', '199'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/reference-docs',
                component: ComponentCreator('/java-spring-boot-notes/docs/reference-docs', '5a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial/aspect-oriented-programming',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial/aspect-oriented-programming', 'bf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial/hibernate-jpa-crud',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial/hibernate-jpa-crud', '738'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial/jpa-hibernate-advanced-mappings',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial/jpa-hibernate-advanced-mappings', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial/rest-api-security',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial/rest-api-security', '0cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial/rest-crud-apis',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial/rest-crud-apis', '9be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial/spring-core',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial/spring-core', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial/spring-mvc',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial/spring-mvc', '403'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial/spring-mvc-crud',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial/spring-mvc-crud', '40e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/java-spring-boot-notes/docs/tutorial/spring-mvc-security',
                component: ComponentCreator('/java-spring-boot-notes/docs/tutorial/spring-mvc-security', 'a03'),
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
