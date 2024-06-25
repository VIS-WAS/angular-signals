import { Component, DoCheck, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
})
export class SignalsComponent implements DoCheck {
  counter = signal(0);
  message: string[] = [];

  increment() {
    // this.counter.set(this.counter() + 1);
    this.counter.update((prev) => prev + 1);
  }
  decrement() {
    this.counter.update((prev) => prev - 1);
  }

  ngDoCheck() {
    console.log('Do check is called');
  }
}
