import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { QuotesListComponent } from './quotes/quotes-list.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
    { path: 'quotes', component: QuotesListComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

