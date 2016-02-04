import {Component} from 'angular2/core';
import {Logger} from '../logger';

@Component({
  selector:'my-grid',
  template:`
  <div *ngIf="rowData">
    <ag-grid-ng2 class="ag-fresh"
      style="height: 300px;"
      [gridOptions]="gridOptions"
      [columnDefs]="columnDefs"
      [rowData] = "rowData">
    </ag-grid-ng2>
  </div>
  `,
  inputs : ['rowData'],
  directives : [ag.grid.AgGridNg2]
})
export class MyGridComponent
{
  constructor(private _logger:Logger){
  }

  public columnDefs = [
    {headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" }
  ];
  public rowData = [];
  public gridOptions = {rowHeight:100};
}
