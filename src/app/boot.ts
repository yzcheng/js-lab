import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';
import {HeroService} from './hero.service';
import {Logger} from './logger';
import * as core from 'angular2/core';

ag.grid.initialiseAgGridWithAngular2({ core: core });

bootstrap(AppComponent, [
   Logger,
   HTTP_PROVIDERS
]);

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
// document.addEventListener('DOMContentLoaded', function main() {
//     bootstrap(AppComponent, [
//         ...('production' === process.env.ENV ? [] : ELEMENT_PROBE_PROVIDERS),
//         ...HTTP_PROVIDERS,
//         ...ROUTER_PROVIDERS,
//         provide(Logger, { useClass: Logger })
//     ])
//         .catch(err => console.error(err));
// });
