import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { ShareListComponent } from './share-list/share-list.component';
import { FormatListComponent } from './format-list/format-list.component';
import { FilesComponent } from './files.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShareListComponent, FormatListComponent, FilesComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ShareListComponent, FormatListComponent, FilesComponent
  ]
})
export class FilesModule { }
