import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { ResetCountAction, SetCountAction } from '../store/app/actions';
import { AppState } from '../store/app/state';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent implements OnInit {
  count: number = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getCount();
  }

  add(): void {
    this.count++;
    this.setCountState();
  }

  subtract(): void {
    this.count--;
    this.setCountState();
  }

  setCountState(): void {
    this.store.dispatch(new SetCountAction({ count: this.count }));
  }

  resetState(): void {
    this.store.dispatch(new ResetCountAction());
  }

  /**
   * Retrieve the data from the store if it exists
   * If we have data in the localstorage, this data will exist
   */
  getCount(): void {
    this.count = this.store.selectSnapshot(AppState.getCount);
  }
}
