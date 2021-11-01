import { Component } from '@angular/core';

interface AccountType {
  value: string;
  viewValue: string;
}

interface NumberType {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'IPS Test - Matthew Clifford';

  personNumber: number = 0;
  companyNumber: number = 0;
  account: string = '';
  personArray: number[] = [];
  companyArray: number[] = [];

  accounts: AccountType[] = [
    { value: 'personal', viewValue: 'Personal' },
    { value: 'corporate', viewValue: 'Corporate' },
  ];

  numbers: NumberType[] = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' },
    { value: 6, viewValue: '6' },
  ];

  companyNumbers: NumberType[] = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' },
    { value: 6, viewValue: '6' },
  ];

  changeNumber(value: any): void {
    this.personNumber = value;
    console.log(this.personNumber);
  }

  changeCompanyNumber(value: any): void {
    this.companyNumber = value;
    console.log(this.companyNumber);
  }

  changeAccount(value: any): void {
    this.account = value;
    console.log(this.account);
  }
}
