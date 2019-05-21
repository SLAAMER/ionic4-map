import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'pulseras', loadChildren: './pulseras/pulseras.module#PulserasPageModule' },
  { path: 'add', loadChildren: './pulseras/add/add.module#AddPageModule' },
  { path: 'modal', loadChildren: './pulseras/add/modal/modal.module#ModalPageModule' },
  { path: 'modal-loc', loadChildren: './pulseras/add/modal-loc/modal-loc.module#ModalLocPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
