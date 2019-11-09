import {Router, RouterConfiguration} from "aurelia-router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import { PLATFORM } from 'aurelia-pal';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router): void {
        this.router = router;

        config.title = 'ag-Grid Aurelia Examples';
        config.map([
            {
                // for deployment to ag-grid.com only
                route: '',
                name: 'blank',
                nav: true,
                moduleId: PLATFORM.moduleName('./components/blank/blank')
            },
            {
                route: 'rich-grid',
                name: 'rich-grid',
                nav: true,
                moduleId: PLATFORM.moduleName('./components/rich-grid-example/rich-grid-example'),
                title: 'Rich Grid with pure JavaScript',
                href: '#/rich-grid'
            },
            {
                route: 'richgrid-declarative',
                name: 'richgrid-declarative',
                nav: true,
                moduleId: PLATFORM.moduleName('./components/rich-grid-declarative-example/rich-grid-declarative-example'),
                title: 'Rich Grid with Declarative Markup',
                href: '#/richgrid-declarative'
            },
            {
                route: 'editor',
                name: 'editor',
                nav: true,
                moduleId: PLATFORM.moduleName('./components/editor-example/editor-example'),
                title: 'Editor Example',
                href: '#/editor'
            },
            {
                route: 'filter',
                name: 'filter',
                nav: true,
                moduleId: PLATFORM.moduleName('./components/filter-example/filter-example'),
                title: 'Filter Example',
                href: '#/filter'
            }
        ]);
    }

    attached(argument) {
        // for deployment to ag-grid.com only
      $('[data-toggle="tooltip"]').tooltip();

        let route = this.router.currentInstruction.queryParams.route ? this.router.currentInstruction.queryParams.route : 'rich-grid';
        this.router.navigateToRoute(route, this.router.currentInstruction.queryParams);
    }
}
