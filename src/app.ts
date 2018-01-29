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
                route: 'pinned-row',
                name: 'pinned-row',
                nav: true,
                moduleId: 'components/pinned-row-example/pinned-row-example',
                title: 'Pinned Row Example',
                href: '#/pinned-row'
            },
            {
                route: 'full-width',
                name: 'full-width',
                nav: true,
                moduleId: 'components/full-width-example/full-width-example',
                title: 'Full Width Example',
                href: '#/full-width'
            },
            {
                route: 'group-row',
                name: 'group-row',
                nav: true,
                moduleId: 'components/group-row-example/group-row-example',
                title: 'Group Row Example',
                href: '#/group-row'
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
