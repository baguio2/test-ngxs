import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { AppState } from '../store/app/state';

@Component({
  selector: 'app-show-count',
  templateUrl: './show-count.component.html',
  styleUrls: ['./show-count.component.scss'],
})
export class ShowCountComponent implements OnInit, OnDestroy {
  count: number = 0;
  subs: Subscription = new Subscription();

  constructor(private store: Store) {}

  ngOnInit() {
    this.subs = this.store.select(AppState.getCount).subscribe({
      next: (data) => (this.count = data),
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
