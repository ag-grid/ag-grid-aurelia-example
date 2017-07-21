import {ICellRenderer} from "ag-grid/main";

export default class NameAndAgeRenderer implements ICellRenderer {
  params:any;

  eGui:HTMLElement;
  init(params: any): void {
    this.params = params;

    this.eGui = document.createElement('span');

    let text = document.createTextNode(`Name: ${params.data.name}, Age: ${params.data.age}`);
    this.eGui.appendChild(text);
  }

  getGui(): HTMLElement {
    return this.eGui;
  }

  refresh(params: any): boolean{
    return false;
  }
}
