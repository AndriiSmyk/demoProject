export class ChangeName{
  static readonly type= "[Name] Change";
  constructor(public payload:string) {
  }
}


export class ChangePosition{
  static readonly type= "[Position] Change";
  constructor(public payload:string) {
  }
}
