import {TestBed} from '@angular/core/testing';
import {PositionService} from './position.service';
import {NgxsModule} from "@ngxs/store";
import {PositionState} from "../../store/position.state";

describe('PositionService', () => {
  let service: PositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([PositionState])
      ]
    });
    service = TestBed.inject(PositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change name', () => {
    const position = "TestPosition";
    service.changePosition(position);
    let positionFromState!: string;
    service.position$.subscribe(n => positionFromState = n.position);
    expect(positionFromState).toBe(position);
  });
});
