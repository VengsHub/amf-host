import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'remote',
    loadChildren: () => import('remote/Module').then(m => m.SubModule)
  },
  {
    path: 'test',
    loadComponent: () => import('remote-vite/Button').then(m => m.Button)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
