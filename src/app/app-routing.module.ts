import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
  { path: '', loadChildren: () => import('./screens/screens.module').then(m => m.ScreensModule) },
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
