import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../shared/services/screen.service';
import * as M from 'materialize-css';
import { Screen } from 'src/app/shared/models/screen.model';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  ecran: Screen;
  constructor(private screenService:ScreenService) {
    this.ecran = this.screenService.myScreen;
   }

  ngOnInit(): void {
    M.AutoInit(); 
  }

}
