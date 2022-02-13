import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  operators = [
    {value: '+', method: this.sum},
    {value: '-', method: this.diff},
    {value: '/', method: this.div},
    {value: 'mod', method: this.mod}
  ]
  firstNumber: number = 0
  secondNumber: number = 0
  operator: string | undefined
  result: number | undefined | string

  setOperator(event: any){
    this.operator = event.target.value
    this.result = ''
  }

  calculate(){
    const method = this.operators.find(item => item.value == this.operator)?.method
    if(method) this.result = method(this.firstNumber, this.secondNumber)
  }

  sum(a: number, b:number){
    return a + b
  }

  diff(a: number, b: number){
    return a - b
  }

  div(a: number, b: number){
    if(b != 0) return a/b
    else return 'Деление на ноль невозможно'
  }

  mod(a: number){
    return Math.abs(a)
  }

}
