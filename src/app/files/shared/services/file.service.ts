import { Injectable } from '@angular/core';
import { Screen } from 'src/app/shared/models/screen.model';
import { File } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {
myScreen:Screen=new Screen();
myFile:File=new File();
  constructor() { 
    this.myFile.fileName='cococou';
    this.myScreen.img='toto';
  }
}
