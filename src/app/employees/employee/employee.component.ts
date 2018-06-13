import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-employes',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        this.employeeService.insertEmployee(form.value);
    }
}
