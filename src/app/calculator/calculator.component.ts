import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  output: number;
  first: number;
  second: number;
  operator = '+';
  error: string;

  constructor() {
  }


  calculate() {
    if (this.first != null && this.second != null) {
      switch (this.operator) {
        case '+':
          this.output = this.first + this.second;
          break;
        case '-':
          this.output = this.first - this.second;
          break;
        case '*':
          this.output = this.first * this.second;
          break;
        case '/':
          // tslint:disable-next-line:triple-equals
          if (this.second == 0) {
            return this.error = 'khong duoc chia cho 0';
          }
          this.output = this.first / this.second;
          break;
      }
      this.error = '';
    } else {
      this.error = 'khong ton tai 1 trong 2 so';
    }
  }

  ngOnInit(): void {
  }

}
