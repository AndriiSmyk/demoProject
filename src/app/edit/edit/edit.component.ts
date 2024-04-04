import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Store} from "@ngxs/store";
import {ChangeName, ChangePosition} from "../../store/actions";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  disableButton: boolean;

  constructor(private fb: FormBuilder, private store: Store) {
    this.disableButton = true;
    this.editForm = this.fb.group({
      name: '',
      position:''
    })
  }

  ngOnInit(): void {
  }

  onFieldChange(): void {
    this.disableButton = this.editForm.value.name.length==0 && this.editForm.value.position.length==0;
  }

  onSubmit() {
    let name = this.editForm.value.name;
    let position = this.editForm.value.position;
    if (name.length!=0){
      this.store.dispatch(new ChangeName(name));
    }
    if (position.length!=0){
      this.store.dispatch(new ChangePosition(position));
    }
    this.editForm.reset();
  }
}
