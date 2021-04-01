import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../shared/services/file.service';
import * as M from 'materialize-css';
import { File } from '../shared/models/file.model';

@Component({
  selector: 'app-format-list',
  templateUrl: './format-list.component.html',
  styleUrls: ['./format-list.component.scss']
})
export class FormatListComponent implements OnInit {
public file:File;
public errorMessage:string='';

  constructor(private fileService: FileService, private router: Router) { 
    this.file=this.fileService.myFile;
  }

  ngOnInit(): void {
    M.AutoInit(); 
  }
  returnBack() {
    this.router.navigate(['previews'])
  }
  
  text(){
    if (false===this.file.fileRecord && false===this.file.fileShared){
      this.errorMessage='Vous devez cocher au moins une case'}
     else{ this.errorMessage='';console.log('yes');} 
  }
  
}
