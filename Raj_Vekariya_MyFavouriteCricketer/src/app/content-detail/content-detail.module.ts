// content-detail/content-detail.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from './content-detail.component';


const routes: Routes = [
  { path: '', component: ContentDetailComponent },
];

@NgModule({
  declarations: [ContentDetailComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: ContentDetailComponent }])],

})
export class ContentDetailModule { }

