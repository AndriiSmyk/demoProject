import {Injectable} from '@angular/core';
import {ChangePosition} from "../../store/position.actions";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {PositionState, PositionStateModel} from "../../store/position.state";


@Injectable({
  providedIn: 'root'
})
export class PositionService {
  @Select(PositionState)
  public position$!: Observable<PositionStateModel>;

  constructor(private store: Store) {
  }

  public changePosition(position: string) {
    this.store.dispatch(new ChangePosition(position));
  }


}
