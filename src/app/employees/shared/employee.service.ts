import {Injectable} from '@angular/core';
import {Employee} from './employee.model';
import {AngularFireList, AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class EmployeeService {
    employeeList: AngularFireList<any>;
    selectedEmployee: Employee = new Employee();

    constructor(private firebase: AngularFireDatabase) {
    }

    getData() {
        this.employeeList = this.firebase.list('employees');
        return this.employeeList;
    }

    insertEmployee(employee: Employee) {
        this.employeeList.push({
            name: employee.name,
            position: employee.position,
            office: employee.office,
            salary: employee.salary
        });

    }
}
