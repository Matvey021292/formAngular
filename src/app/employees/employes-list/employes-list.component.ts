import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {AngularFireList} from 'angularfire2/database';
import {Employee} from '../shared/employee.model';

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {
  employeelist: AngularFireList<Employee>;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getData();
  }

}
