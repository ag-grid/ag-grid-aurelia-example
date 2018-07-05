import {Router, RouterConfiguration} from "aurelia-router";

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
                moduleId: 'components/blank/blank'
            },
            {
                route: 'rich-grid',
                name: 'rich-grid',
                nav: true,
                moduleId: 'components/rich-grid-example/rich-grid-example',
                title: 'Rich Grid with pure JavaScript',
                href: '#/rich-grid'
            },
            {
                route: 'richgrid-declarative',
                name: 'richgrid-declarative',
                nav: true,
                moduleId: 'components/rich-grid-declarative-example/rich-grid-declarative-example',
                title: 'Rich Grid with Declarative Markup',
                href: '#/richgrid-declarative'
            },
            {
                route: 'editor',
                name: 'editor',
                nav: true,
                moduleId: 'components/editor-example/editor-example',
                title: 'Editor Example',
                href: '#/editor'
            },
            {
                route: 'filter',
                name: 'filter',
                nav: true,
                moduleId: 'components/filter-example/filter-example',
                title: 'Filter Example',
                href: '#/filter'
            }
        ]);
    }

    attached(argument) {
        // for deployment to ag-grid.com only
        let route = this.router.currentInstruction.queryParams.route ? this.router.currentInstruction.queryParams.route : 'rich-grid';
        this.router.navigateToRoute(route, this.router.currentInstruction.queryParams);
    }
}
