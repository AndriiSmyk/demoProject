import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {NameStateModel} from "../../store/name.state";
import {PositionStateModel} from "../../store/position.state";
import {NameService} from "../../services/name/name.service";
import {PositionService} from "../../services/position/position.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  name$!: Observable<NameStateModel>;
  position$!: Observable<PositionStateModel>;

  constructor(protected nameService: NameService, protected positionService: PositionService) {
  }

  ngOnInit(): void {
    this.name$ = this.nameService.name$;
    this.position$ = this.positionService.position$;
  }

}
