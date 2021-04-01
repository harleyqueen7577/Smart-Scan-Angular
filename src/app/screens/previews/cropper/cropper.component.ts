import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../shared/services/screen.service';
import { Screen } from 'src/app/shared/models/screen.model';
import * as M from 'materialize-css';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit {
  ecran: Screen;

  constructor(private screenService:ScreenService) {
    this.ecran = this.screenService.myScreen;
  }
  

  ngOnInit(): void {
    M.AutoInit(); 
  }

}
