export class ChangeName {
  static readonly type = "[Name] Change";

  constructor(public payload: string) {
  }
}
