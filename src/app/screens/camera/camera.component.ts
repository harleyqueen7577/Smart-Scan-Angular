import { Component, ElementRef, OnInit } from '@angular/core';
import { ScreenService } from '../shared/services/screen.service';
import { ViewChild } from '@angular/core';
import { Screen } from 'src/app/shared/models/screen.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  @ViewChild('monScan') monScan!: ElementRef;

  canvas: any;
  waited: boolean;
  // impressionEcran: any;
  public screen: Screen;
  constructor(private screenService: ScreenService, private router: Router) {
    this.screen = this.screenService.myScreen;
    this.waited = false;
  }

  ngOnInit(): void {
    this.startCamera()
  }

  startCamera() {
    console.log('test')
    this.screenService.startCamera().then(
      (stream) => {
        this.waited = true;
        this.videoElement.nativeElement.onloadedmetadata = () => this.videoElement.nativeElement.play();
        if ('srcObject' in this.videoElement.nativeElement) {
          this.videoElement.nativeElement.srcObject = stream;
        } else {
          this.videoElement.nativeElement.src = window.URL.createObjectURL(stream);
        }
      }).catch(
        (err) => {
          alert("getuser media error");
          console.log(err)
          this.router.navigate(['/'])
        })
  }

  // startCamera() {
  //   const constraints = { audio: false, video: true };
  //   navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  //             this.waited=true;
  //             this.videoElement.nativeElement.onloadedmetadata = () => this.videoElement.nativeElement.play();

  //     if ('srcObject' in this.videoElement.nativeElement) {
  //       this.videoElement.nativeElement.srcObject = stream;
  //     } else {
  //       this.videoElement.nativeElement.src = window.URL.createObjectURL(stream);
  //     }
  //   }).catch(
  //     (err) => {
  //       alert("getuser media error");
  //       console.log(err)
  //       this.router.navigate(['/'])
  //     })
  // }

  takePicture() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.videoElement.nativeElement.offsetWidth;
    this.canvas.height = this.videoElement.nativeElement.offsetHeight;
    this.monScan.nativeElement.appendChild(this.canvas);
    this.canvas.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0, this.canvas.width, this.canvas.height);
    var data = this.canvas.toDataURL();
    this.screen.img = data;
    this.router.navigate(['previews']);
  }
}
