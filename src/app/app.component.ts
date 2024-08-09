import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Store} from "@ngrx/store";
import {CounterState} from "./ngrx/counter/counter.state";
import {AsyncPipe, DatePipe} from "@angular/common";
import * as CountActions from './ngrx/counter/counter.actions';
import {FormsModule} from "@angular/forms";
import {ClockState} from "./ngrx/clock/clock.state";
import * as ClockActions from './ngrx/clock/clock.actions';
import { CalculatorState } from './ngrx/calculator/calculator.state';
import * as CalculatorActions from './ngrx/calculator/calculator.actions';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  display: string = '';
  currentNumber: string = '';
  operator: string | null = null;
  previousNumber: string = '';

  constructor(private store:Store<{calculator: CalculatorState}>) {}
  appendNumber(number: string) {
    this.currentNumber += number;
    this.updateDisplay();
  }

  setOperator(operator: string) {
    if (this.currentNumber === '') return;
    if (this.previousNumber !== '') {
      this.calculate();
    }
    this.operator = operator;
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
  }

  calculate() {
    if (
      this.currentNumber === '' ||
      this.previousNumber === '' ||
      this.operator === null
    )
      return;
    const a = parseFloat(this.previousNumber);
    const b = parseFloat(this.currentNumber);
    let result: number;

    switch (this.operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        return;
    }

    this.currentNumber = result.toString();
    this.previousNumber = '';
    this.operator = null;
    this.updateDisplay();
  }

  clear() {
    this.display = '';
    this.currentNumber = '';
    this.previousNumber = '';
    this.operator = null;
  }

  private updateDisplay() {
    this.display = this.currentNumber;
  }
  }












//   public delay(ms: number) {
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve(1);
//       },ms);
//     });
//   }
//
//   async dicho() {
//     console.log("Di cho");
//     await this.delay(5000);
//     console.log("Mua rau");
//     console.log("Mua thit");
//     console.log("Mua hanh");
//   }
//   async naunuoc(){
//     await this.delay(4000);
//     console.log("Nau nuoc");
//   }
// async soche(){
//   await this.delay(2000);
//   console.log("So che thuc pham");
// }
// async niemgiavi(){
//     await this.delay(2000)
//   console.log("Nem gia vi");
// }
//
// async an() {
//     console.time("An");
//     await this.dicho()
//   await Promise.all([this.naunuoc(), this.soche()])
//
//     await this.niemgiavi()
//     console.timeEnd("An");
// }
//
//
//















// input = 0;
//   count$ = this.store.select('counter', 'count');
//   time$ = this.store.select('clock', 'time');
//
//   constructor(private store: Store<{ counter: CounterState ,clock:ClockState}>) {
//     setInterval(() => {
//       this.store.dispatch(
//         ClockActions.increase({time: new Date()})
//       )
//     },1000)
//   }
//
//   increase() {
//     this.store.dispatch(CountActions.increase());
//   }
//   decrease() {
//     this.store.dispatch(CountActions.decrease());
//   }
//   reset(){
//     this.store.dispatch(CountActions.reset());
//   }
//   public update(){
//     this.store.dispatch(CountActions.update({value: parseInt(String(this.input))}));
//   }



