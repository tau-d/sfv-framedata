import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContainerComponent } from './main-container/main-container.component';

const routes: Routes = [
  { path: ':character', component: MainContainerComponent },
  { path: '',   redirectTo: '/Abigail', pathMatch: 'full' },
  { path: '**', redirectTo: '/Abigail' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
