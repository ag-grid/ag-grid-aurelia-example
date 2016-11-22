import {RouterConfiguration, Router} from "aurelia-router";

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'ag-Grid Aurelia Examples';
    config.map([
      {route: '', redirect: 'rich-grid'},
      {
        route: 'rich-grid',
        name: 'rich-grid',
        nav: true,
        moduleId: 'components/rich-grid-example/rich-grid-example',
        title: 'Rich Grid with pure JavaScript'
      },
      {
        route: 'rich-grid-declarative',
        name: 'rich-grid-declarative',
        nav: true,
        moduleId: 'components/rich-grid-declarative-example/rich-grid-declarative-example',
        title: 'Rich Grid with Declarative Markup'
      },
      {
        route: 'editor',
        name: 'editor',
        nav: true,
        moduleId: 'components/editor-example/editor-example',
        title: 'Editor Example'
      },
      {
        route: 'floating-row',
        name: 'floating-row',
        nav: true,
        moduleId: 'components/floating-row-example/floating-row-example',
        title: 'Floating Row Example'
      },
      {
        route: 'full-width',
        name: 'full-width',
        nav: true,
        moduleId: 'components/full-width-example/full-width-example',
        title: 'Full Width Example'
      },
      {
        route: 'filter',
        name: 'filter',
        nav: true,
        moduleId: 'components/filter-example/filter-example',
        title: 'Filter Example'
      }
    ]);
  }
}
