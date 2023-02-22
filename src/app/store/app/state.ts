import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ResetCountAction, SetCountAction } from './actions';

export interface CountModel {
  count: number;
}

export const DEFAULT_STATE = {
  count: 0,
};

@State({
  name: 'AppState',
  defaults: DEFAULT_STATE,
})
@Injectable()
export class AppState {
  // Selector
  @Selector()
  static getCount(state: CountModel): number {
    return state.count;
  }

  // SetCountAction
  @Action(SetCountAction)
  setDefaultColumns(
    { patchState }: StateContext<CountModel>,
    { payload }: SetCountAction
  ): void {
    patchState({
      count: payload.count,
    });
  }

  @Action(ResetCountAction)
  resetCountAction({ patchState }: StateContext<CountModel>): void {
    patchState({
      count: DEFAULT_STATE.count,
    });
  }
}
