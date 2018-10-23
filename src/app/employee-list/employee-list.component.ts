import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Employee } from '../employee';
import { EMPLOYEE_LIST } from '../mock-employee-list'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'dateOfBirth', 'userName', 'hireDate', 'actions'];
  dataSource = new MatTableDataSource(EMPLOYEE_LIST);

  applyFilter(filterValue: string) {
  	if (filterValue.length > 2) {
  		this.dataSource.filter = filterValue.trim().toLowerCase();
  	} else {
  		this.dataSource.filter = '';
  	}
  }

  @ViewChild(MatSort) sort: MatSort;
  
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = function(data, filter: string): boolean {
	    return data.name.toLowerCase().includes(filter);
    };
  }
}
