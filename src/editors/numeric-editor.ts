import {customElement,inject,bindable} from 'aurelia-framework';
import {BaseAureliaEditor} from 'ag-grid-aurelia';

@customElement('ag-numeric-editor')
@inject(Element)
export class NumericEditor extends BaseAureliaEditor {
  params: any;

  @bindable() value: number;
  @bindable() hasFocus:boolean = false;

  element:any;
  constructor(element) {
    super();

    this.element = element;
  }

  attached():void {
    this.hasFocus = true;
    this.element.addEventListener('keydown', this.onKeyDown);
  }

  detached() {
    this.element.removeEventListener('keydown', this.onKeyDown);
  }

  getValue(): any {
    return this.value;
  }

  isCancelBeforeStart(): boolean {
    return '1234567890'.indexOf(this.params.charPress) < 0;
  }

  onDoubleClick(event) {
    console.log("asdfasdf")
  }

  // will reject the number if it greater than 1,000,000
  // not very practical, but demonstrates the method.
  isCancelAfterEnd(): boolean {
    return this.value > 1000000;
  };

  onKeyDown(event): void {
    if (!NumericEditor.isKeyPressedNumeric(event)) {
      if (event.preventDefault) event.preventDefault();
    }
  }

  static getCharCodeFromEvent(event): any {
    event = event || window.event;
    return (typeof event.which == "undefined") ? event.keyCode : event.which;
  }

  static isCharNumeric(charStr): boolean {
    return !!/\d/.test(charStr);
  }

  static isKeyPressedNumeric(event): boolean {
    var charCode = NumericEditor.getCharCodeFromEvent(event);
    var charStr = String.fromCharCode(charCode);
    return NumericEditor.isCharNumeric(charStr);
  }
}
