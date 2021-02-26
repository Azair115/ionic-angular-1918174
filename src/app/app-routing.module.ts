import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurantes',
    pathMatch: 'full'
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
