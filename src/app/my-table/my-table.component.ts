import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
];
@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  columnsMetaData: {key: string, name: string}[] = [
    {key: 'position', name: 'Index'},
    {key: 'name', name: 'Name'},
    {key: 'weight', name: 'Weight'},
    {key: 'symbol', name: 'Notation'}
  ];
  dataSource = ELEMENT_DATA;
  isTableShown: boolean = false;
  isUserLoggedIn: boolean = true;
  counter = 10;
  isFormShown: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  public addRow(){
    this.counter = this.counter + 1;
    const newRow: PeriodicElement = {
      name: 'Adamantium',
      position: this.counter,
      symbol: 'Ad',
      weight: 100000
    };
    this.dataSource.push(newRow);
    this.dataSource = [...this.dataSource];
  }

  public getRowData(row: any, data: {key: string, name: string}){
      return row[data.key];
  }

  public toggleForm(){
    this.isFormShown = !this.isFormShown;
  }
}
