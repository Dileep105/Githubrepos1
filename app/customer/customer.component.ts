import { Component, OnInit } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { Customer } from './Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  custList:Customer[]=[{custId:101,custName:"Jay",billAmt:50000,city:"Mumbai",country:"India"},
                        {custId:102,custName:"ViJay",billAmt:60000,city:"Pune",country:"India"},
                        {custId:103,custName:"SanJay",billAmt:70000,city:"Delhi",country:"India"}]

  constructor() { }

  ngOnInit(): void {
  }

}
