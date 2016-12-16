import {Aurelia} from 'aurelia-framework'
import environment from './environment';

// enterprise users uncomment this
// import { LicenseManager } from 'ag-grid-enterprise/main';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('ag-grid-aurelia')
    .feature('resources');

  // enterprise uncomment and set licence key here
  // LicenseManager.setLicenseKey('LICENSE KEY');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }


  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
