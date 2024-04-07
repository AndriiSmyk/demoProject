import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PositionService} from "../../services/position/position.service";
import {NameService} from "../../services/name/name.service";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  editForm: FormGroup;
  private destroyName$: Subject<Boolean> = new Subject<Boolean>();
  private destroyPosition$: Subject<Boolean> = new Subject<Boolean>();

  constructor(private fb: FormBuilder, private positionService: PositionService, private nameService: NameService, private router: Router) {
    this.editForm = this.fb.group({
      name: '',
      position: ''
    })
  }

  ngOnInit(): void {
    this.nameService.name$.pipe(takeUntil(this.destroyName$)).subscribe(n=>this.editForm.patchValue({name:n.name}));
    this.positionService.position$.pipe(takeUntil(this.destroyPosition$)).subscribe(p=>this.editForm.patchValue({position:p.position}))
  }

  onSubmit() {
    let name = this.editForm.value.name;
    let position = this.editForm.value.position;
    this.nameService.changeName(name);
    this.positionService.changePosition(position);
    this.router.navigate(['/about-me'])
  }

  ngOnDestroy(): void {
    this.destroyName$.next(true);
    this.destroyName$.unsubscribe();
    this.destroyPosition$.next(true);
    this.destroyPosition$.unsubscribe();
  }


}
