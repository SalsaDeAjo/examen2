import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule),
  },
  {
    path: 'movements',
    loadChildren: () => import('./movements/movements.module').then(m => m.MovementsPageModule),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full', // Redirigir a 'welcome' cuando la ruta es vacía
  },
  {
    path: '**',
    redirectTo: 'welcome', // Redirigir a 'welcome' en caso de una ruta no encontrada
  },
  {
    path: 'mapview',
    loadChildren: () => import('./mapview/mapview.module').then( m => m.MapviewPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

