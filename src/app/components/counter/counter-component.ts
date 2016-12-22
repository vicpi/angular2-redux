import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { CounterActions } from '../../actions/counter-actions';

@Component({
  selector: 'counter',
  providers: [ CounterActions ],
  template: `
  <h1>Sample page using Redux approach via Ng2Redux</h1>
  <p>
    Clicked: {{ counter$ | async }} times
    <button (click)="actions.increment()">+</button>
    <button (click)="actions.decrement()">-</button>
    <button (click)="actions.incrementIfOdd()">Increment if odd</button>
    <button (click)="actions.incrementAsync()">Increment async</button>
  </p>
  `
})
export class CounterComponent {
  @select() counter$: Observable<number>;

  constructor(public actions: CounterActions) {}
}
