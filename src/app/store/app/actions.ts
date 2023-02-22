// Actions
export class SetCountAction {
  static readonly type = '[SetCountAction] Set count';
  constructor(public payload: { count: number }) {}
}

export class ResetCountAction {
  static readonly type = '[ResetCountAction] Reset count';
}
