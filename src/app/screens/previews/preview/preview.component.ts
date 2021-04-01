import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Screen } from 'src/app/shared/models/screen.model';
import { ScreenService } from '../../shared/services/screen.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  ecran: Screen;

  constructor(private screenService: ScreenService, private router: Router) {
    this.ecran = this.screenService.myScreen;
  }

  ngOnInit(): void {
  }

  returnBack() {
    this.router.navigate(['camera'])
  }

  cropperBack() {
    this.router.navigate(['previews', 'cropper'])
  }
  saveBack() {
    this.router.navigate(['files'])
  }
}
