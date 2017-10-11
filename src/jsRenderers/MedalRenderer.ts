import {ICellRenderer} from "ag-grid/main";

export default class MedalRenderer implements ICellRenderer {
  params:any;

  eGui:HTMLElement;
  init(params: any): void {
    this.params = params;

    this.eGui = document.createElement('span');
    let text = document.createTextNode(`${params.node.key} Gold: ${params.node.aggData.gold}, Silver: ${params.node.aggData.silver}, Bronze: ${params.node.aggData.bronze}`);
    this.eGui.appendChild(text);
  }

  getGui(): HTMLElement {
    return this.eGui;
  }

  refresh(params: any): boolean{
    return false;
  }
}
