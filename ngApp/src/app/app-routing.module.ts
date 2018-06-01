import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { AuthGuard } from './auth.guard';
import { ArticleModeComponent } from './content/article-mode/article-mode.component';
import { CompteComponent } from './compte/compte.component';
import { DressingComponent } from './dressing/dressing.component';
import { FavorisComponent } from './content/favoris/favoris.component';
import { ManqueIdeeComponent } from './content/manque-idee/manque-idee.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
      path: 'dressing',
      component: DressingComponent
  },
  {
      path: 'article',
      component: ArticleModeComponent
  },
  {
      path: 'favoris',
      component: FavorisComponent
  },
  {
      path: 'idee',
      component: ManqueIdeeComponent
  },
  {
      path: 'compte',
      component: CompteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
