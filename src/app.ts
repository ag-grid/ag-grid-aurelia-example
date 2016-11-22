import {RouterConfiguration, Router} from "aurelia-router";

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'ag-Grid Aurelia Examples';
    config.map([
      {route: '', redirect: 'rich-grid'},
      {
        route: 'rich-grid/:fromDocs?',
        name: 'rich-grid',
        nav: true,
        moduleId: 'components/rich-grid-example/rich-grid-example',
        title: 'Rich Grid with pure JavaScript',
        href:'#/rich-grid'
      },
      {
        route: 'richgrid-declarative/:fromDocs?',
        name: 'richgrid-declarative',
        nav: true,
        moduleId: 'components/rich-grid-declarative-example/rich-grid-declarative-example',
        title: 'Rich Grid with Declarative Markup',
        href:'#/richgrid-declarative'
      },
      {
        route: 'editor/:fromDocs?',
        name: 'editor',
        nav: true,
        moduleId: 'components/editor-example/editor-example',
        title: 'Editor Example',
        href:'#/editor'
      },
      {
        route: 'floating-row/:fromDocs?',
        name: 'floating-row',
        nav: true,
        moduleId: 'components/floating-row-example/floating-row-example',
        title: 'Floating Row Example',
        href:'#/floating-row'
      },
      {
        route: 'full-width/:fromDocs?',
        name: 'full-width',
        nav: true,
        moduleId: 'components/full-width-example/full-width-example',
        title: 'Full Width Example',
        href:'#/full-width'
      },
      {
        route: 'filter/:fromDocs?',
        name: 'filter',
        nav: true,
        moduleId: 'components/filter-example/filter-example',
        title: 'Filter Example',
        href:'#/filter'
      }
    ]);
  }
}
