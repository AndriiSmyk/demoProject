import {Action, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ChangeName} from "./actions";

export interface NameStateModel{
  name:string;
}

@State<NameStateModel>({
  name:'name',
  defaults:{
    name:'___'
  },
})
@Injectable()
export class NameState{
  @Action(ChangeName)
  changeName(stateContext:StateContext<NameStateModel>,{payload}:ChangeName){
    stateContext.patchState({
      name:payload
    });
  }
}
