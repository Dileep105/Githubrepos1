import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  empList:Employee[]=[{empNo:101,empName:"Jay",empSal:10000.25},
                      {empNo:102,empName:"ViJay",empSal:10220.25}];
   constructor() { }

  ngOnInit(): void {
  }

}
