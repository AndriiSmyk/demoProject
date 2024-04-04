import {ComponentFixture, TestBed} from '@angular/core/testing';
import {EditComponent} from './edit.component';
import {NgxsModule, Store} from "@ngxs/store";
import {NameState, NameStateModel} from "../../store/namestate";
import {PositionState, PositionStateModel} from "../../store/positionstate";
import {ChangeName, ChangePosition} from "../../store/actions";
import {ReactiveFormsModule} from "@angular/forms";

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [NgxsModule.forRoot([NameState, PositionState]),
        ReactiveFormsModule
      ]
    })
      .compileComponents();
    store=TestBed.inject(Store);
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change name', () => {
    const name = 'TestName';
    store.dispatch(new ChangeName(name));
    const state: NameStateModel = store.selectSnapshot(NameState);
    expect(state.name).toBe(name);
  })

  it('should change position', () => {
    const position = 'TestPosition';
    store.dispatch(new ChangePosition(position));
    const state: PositionStateModel = store.selectSnapshot(PositionState);
    expect(state.position).toBe(position);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
