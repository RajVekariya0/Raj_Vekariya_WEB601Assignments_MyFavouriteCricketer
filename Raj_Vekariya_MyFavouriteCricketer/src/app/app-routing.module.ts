import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list/:id', pathMatch: 'full'},
  { path: 'list', component: ContentListComponent },
  { path: 'list/:id', loadChildren: () => import('./content-detail/content-detail.module').then(m => m.ContentDetailModule) },
  { path: 'detail/:id', loadChildren: () => import('./content-detail/content-detail.module').then(m => m.ContentDetailModule) },

  { path: '**', redirectTo: '/list' } // Handling invalid URLs with a redirect to the content list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
