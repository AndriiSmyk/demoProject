import {TestBed} from '@angular/core/testing';
import {NameService} from './name.service';
import {NgxsModule} from "@ngxs/store";
import {NameState} from "../../store/name.state";

describe('NameService', () => {
  let service: NameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([NameState])
      ]
    });
    service = TestBed.inject(NameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change name', () => {
    const name = "TestName";
    service.changeName(name);
    let nameFromState!: string;
    service.name$.subscribe(n => nameFromState = n.name);
    expect(nameFromState).toBe(name);
  });
});
