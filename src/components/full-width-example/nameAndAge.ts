import {bindable, autoinject, customElement} from 'aurelia-framework'

@autoinject()
@customElement('name-and-age')
export class NameAndAge {

  @bindable()
  params;

  constructor() {

  }

}
