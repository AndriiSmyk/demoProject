import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {Store} from "@ngxs/store";
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  name$!:Observable<string>;
  position$!:Observable<string>;

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.name$ = this.store.select(state => state.name).pipe(map(state=>state.name));
    this.position$ = this.store.select(state => state.position).pipe(map(state=>state.position));
  }

}
