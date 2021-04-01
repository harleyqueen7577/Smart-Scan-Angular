import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewsRoutingModule } from './previews-routing.module';
import { PreviewsComponent } from './previews.component';
import { CropperComponent } from './cropper/cropper.component';
import { FilterComponent } from './filter/filter.component';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [PreviewsComponent,PreviewComponent ,CropperComponent, FilterComponent,],
  imports: [
    CommonModule,
    PreviewsRoutingModule
  ],
  exports:[
   PreviewComponent, CropperComponent, FilterComponent, PreviewsComponent]
})
export class PreviewsModule { }
