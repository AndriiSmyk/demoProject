import {Injectable} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ChangeName} from "../../store/name.actions";
import {Observable} from "rxjs";
import {NameState, NameStateModel} from "../../store/name.state";

@Injectable({
  providedIn: 'root'
})
export class NameService {
  @Select(NameState)
  public name$!: Observable<NameStateModel>;

  constructor(private store: Store) {
  }

  public changeName(name: string) {
    this.store.dispatch(new ChangeName(name));
  }


}
