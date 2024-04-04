import {Action, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ChangePosition} from "./actions";

export interface PositionStateModel{
  position:string;
}

@State<PositionStateModel>({
  name:'position',
  defaults:{
    position:'___'
  },
})
@Injectable()
export class PositionState{
  @Action(ChangePosition)
  changeName(stateContext:StateContext<PositionStateModel>,{payload}:ChangePosition){
    stateContext.patchState({
      position:payload
    });
  }
}
