import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { CameraComponent } from './camera/camera.component';
import { PreviewComponent } from './previews/preview/preview.component';
import { CropperComponent } from './previews/cropper/cropper.component';
import { FilterComponent } from './previews/filter/filter.component';
import { NavigationButtonComponent } from './shared/navigation-button/navigation-button.component';
import { ScreensComponent } from './screens.component';



@NgModule({
  declarations: [WelcomeComponent, CameraComponent, NavigationButtonComponent,ScreensComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule
  ],
  exports:[
    WelcomeComponent, CameraComponent, NavigationButtonComponent,ScreensComponent]
})
export class ScreensModule { }
