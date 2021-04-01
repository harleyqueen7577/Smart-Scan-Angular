import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Screen } from '../../../shared/models/screen.model';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
 myScreen:Screen=new Screen();
 
  constructor() { 
   
  }

  startCamera() {
    const constraints = { audio: false, video: true };
   return navigator.mediaDevices.getUserMedia(constraints)
}
}