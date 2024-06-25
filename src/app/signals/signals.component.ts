import { Component, DoCheck, Signal, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
})
export class SignalsComponent implements DoCheck {
  counter = signal(0);
  message = signal<string[]>([]);

  increment() {
    // this.counter.set(this.counter() + 1);
    this.counter.update((prev) => prev + 1);
    this.message.mutate((prev) =>
      prev.push('CURRENT VALUE ADDED IS ' + this.counter())
    );
  }
  decrement() {
    this.counter.update((prev) => prev - 1);
    this.message.mutate((prev) => prev.pop());
  }

  ngDoCheck() {
    console.log('Do check is called');
  }
}
