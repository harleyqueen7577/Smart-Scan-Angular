import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './camera/camera.component';
import { ScreensComponent } from './screens.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component:ScreensComponent,
  children:[
    {
      path:'',component:WelcomeComponent
    },
    {
      path:'camera',component:CameraComponent,
    },
    {
      path:'previews',loadChildren: () => import('./previews/previews.module').then(m => m.PreviewsModule)
    },
   
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }

