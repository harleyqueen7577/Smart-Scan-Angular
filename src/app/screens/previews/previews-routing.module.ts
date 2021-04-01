import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropperComponent } from './cropper/cropper.component';
import { FilterComponent } from './filter/filter.component';
import { PreviewComponent } from './preview/preview.component';
import { PreviewsComponent } from './previews.component';

const routes: Routes = [
  {path:'',component:PreviewsComponent,
  children:[
    {
      path:'',component:PreviewComponent
    },
    {
      path:'filter',component:FilterComponent,
    },
    {
      path:'cropper',component:CropperComponent,
    },
]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewsRoutingModule { }
