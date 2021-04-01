import { Component, OnInit } from '@angular/core';
import { Screen } from 'src/app/shared/models/screen.model';
import { File } from '../shared/models/file.model';
import { FileService } from '../shared/services/file.service';
//Import pour pouvoir activer Materialize (doit se faire sur chaque composant qui en a besoin)
import * as M from 'materialize-css';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-list',
  templateUrl: './share-list.component.html',
  styleUrls: ['./share-list.component.scss']
})
export class ShareListComponent implements OnInit {
  public fileName: File;
  public ecran: Screen;

  constructor(private fileService: FileService, private router:Router) {
    this.fileName = this.fileService.myFile;
    this.ecran = this.fileService.myScreen;
  }

  ngOnInit(): void {
    // permet de lancer matérialize dans le html
    M.AutoInit();  }

    returnBack() {
      this.router.navigate(['files'])
    }
}
