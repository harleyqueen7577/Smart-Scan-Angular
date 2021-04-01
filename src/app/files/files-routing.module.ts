import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files.component';
import { FormatListComponent } from './format-list/format-list.component';
import { ShareListComponent } from './share-list/share-list.component';

const routes: Routes = [
//   {
//   path:'',component:FormatListComponent
// },
// {
//   path:'share',component:ShareListComponent
// },
{path:'',component:FilesComponent,
children:[
  {
    path:'',component:FormatListComponent
  },
  {
    path:'share',component:ShareListComponent
  },
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
